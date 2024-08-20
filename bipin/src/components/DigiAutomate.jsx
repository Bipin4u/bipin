import React from 'react';
import './response.css';

const DigiAutomate = () => {
  return (
    <div className="container">
      <div className="code-section">
        <h2>Python Script</h2>
        <pre>
{`
import time
import cv2
import threading
import datetime
import subprocess
import os
import Remote_keys as rc
import xml.etree.ElementTree as ET
from pywinauto.application import Application

font = cv2.FONT_HERSHEY_SIMPLEX

def record_video(i, j, Motionloopcount, MotionDetectorFlag, MotionCount):
    static_back = None
    cap = cv2.VideoCapture(0)
    fourcc = cv2.VideoWriter_fourcc(*'XVID')
    out = cv2.VideoWriter(
        "C:\\Users\\bipin.kumar\\OneDrive - HCL Technologies Ltd\\Desktop\\StabilityReport\\video\\"
        + "video" + str(i) + "_" + str(j) + '_' + "_".join(str(datetime.datetime.now())[:-7].split(" ")).replace(":", "-") + ".avi",
        fourcc, 20.0, (640, 480)
    )
    while recording_flag.is_set():
        ret, frame = cap.read()
        cv2.imshow('frame', frame)
        out.write(cv2.putText(frame, str(datetime.datetime.now())[:-7], (25, 25), font, 1, (0, 255, 255), 2, cv2.LINE_4))
        time.sleep(.1)
        if MotionDetectorFlag[0] == 1:
            Motionloopcount[0] += 1
            motion = 0
            gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
            gray = cv2.GaussianBlur(gray, (21, 21), 0)
            if static_back is None:
                static_back = gray
                continue
            diff_frame = cv2.absdiff(static_back, gray)
            thresh_frame = cv2.threshold(diff_frame, 30, 255, cv2.THRESH_BINARY)[1]
            thresh_frame = cv2.dilate(thresh_frame, None, iterations=2)
            cnts, _ = cv2.findContours(thresh_frame.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
            for contour in cnts:
                if cv2.contourArea(contour) < 10000:
                    continue
                motion = 1
            if motion == 1:
                MotionCount[0] += 1

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    out.release()
    cv2.destroyAllWindows()

def record_log(i, j):
    os.system('adb logcat -c')
    process = subprocess.Popen(["adb", "logcat"], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    file = "C:\\Users\\bipin.kumar\\OneDrive - HCL Technologies Ltd\\Desktop\\StabilityReport\\logs\\" + 'log_' + str(i) + '_' + str(j) + '.txt'
    with open(file, 'w') as fh:
        while log_flag.is_set():
            line = process.stdout.readline().decode('utf-8')
            fh.write(line.strip() + '\n')

def VideoCheck(MotionDetectorFlag, Motionloopcount, MotionCount):
    for i in range(4):
        MotionDetectorFlag[0] = 1
        Motionloopcount[0] = 0
        MotionCount[0] = 0
        time.sleep(7)
        MotionDetectorFlag[0] = 0
        if MotionCount[0] == 0 or Motionloopcount[0] / MotionCount[0] < .2:
            print('black picture')
            if i == 3:
                return 'black picture'
        else:
            print('Ok video')
            return 'Ok video'

def modifyStreamFile():
    root = ET.parse('C:\\Stream\\phoenix_35_060220_0948am.xa3')
    root.find('Atsc3/Subframe/Plp/Source/PcapFile').attrib['filename'] = "C:\\Stream\\" + streamList[i]
    root.write("C:\\Stream\\demo.XA3")

def automateATSC():
    app = Application(backend="uia").connect(path=r"C:\\Users\\bipin.kumar\\OneDrive - HCL Technologies Ltd\\Desktop\\Atsc3Xpress\\Atsc3Xpress.exe")
    main_dlg = app.window(title_re=".*Atsc3Xpress*")
    openfile = main_dlg.child_window(title="toolStrip1", auto_id="toolStrip1", control_type="ToolBar").child_window(title="Open", control_type="Button")
    openfile.click_input()
    time.sleep(3)
    try:
        smallwindow = main_dlg.child_window(title="Save", control_type="Window").child_window(title="No", auto_id="7", control_type="Button")
        smallwindow.click_input()
    except:
        pass
    app_file = Application().connect(title_re=".*Open")
    file_dlg = app_file.window(title_re=".*Open*")
    time.sleep(2)
    filev = file_dlg.child_window(title="&Open", class_name="Button")
    filev.click_input()
    time.sleep(2)

MotionDetectorFlag = [0]
Motionloopcount = [0]
MotionCount = [0]
os.system('adb devices')
os.system('adb shell am broadcast -a com.sony.dtv.tvinput.atsc3tuner.intent.CHANGE_ANDROID_TREE --ei android_tree_request_code 0')
recording_flag = threading.Event()
log_flag = threading.Event()
looprun = int(input('Enter how many loops to run: '))
streamList =  ['Dual_1PID_DRC_ML_200_100_H265_ATSC3_59fps94.pcap','NAB0005_2019-06-07_A.pcap','phoenix_35_060220_0948am.pcap','SD_20190321_191429_CEA-CC.r2.pcap','P_DRM-OTA-G1P-SK-CENC8-S1_20200624_1702.pcap']
os.mkdir("C:\\Users\\bipin.kumar\\OneDrive - HCL Technologies Ltd\\Desktop\\StabilityReport")
os.mkdir("C:\\Users\\bipin.kumar\\OneDrive - HCL Technologies Ltd\\Desktop\\StabilityReport\\logs")
os.mkdir("C:\\Users\\bipin.kumar\\OneDrive - HCL Technologies Ltd\\Desktop\\StabilityReport\\video")
bugreportControlFlag = [0]

for i in range(len(streamList)):
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break
    time.sleep(2)
    for j in range(looprun):
        bugreportControlFlag[0] = 0
        recording_flag.set()
        video_thread = threading.Thread(target=record_video, args=(i, j, Motionloopcount, MotionDetectorFlag, MotionCount,))
        video_thread.start()

        log_flag.set()
        log_thread = threading.Thread(target=record_log, args=(i, j,))
        log_thread.start()

        print('loop: ' + str(i) + '_' + str(j))
        with open("keyevent.txt", "r+") as file1:
            for line in file1:
                for word in line:
                    print(word, end='')
                    rc.channelOperation(str(word))
                    if word == 'D':
                        video_Check_output = ''
                        video_Check_output = VideoCheck(MotionDetectorFlag, Motionloopcount, MotionCount)
                        if video_Check_output == 'black picture':
                            log_flag.clear()
                            log_thread.join()
                            bugreportControlFlag[0] = 1
                            os.system('C:\\platform-tools\\get_bugreport.bat')

        recording_flag.clear()
        video_thread.join()
        if bugreportControlFlag == 0:
            log_flag.clear()
            log_thread.join()
        else:
            pass

    modifyStreamFile()
    automateATSC()

    demo = 'HssHsssuuursrsrsrsrsrsressedsesesesdsesssemmmIsse'
    # for i in demo:
    #     rc.channelOperation(i)

# Channel operation simulation
def channelOperation(key):
    match key:
        case "+":
            os.system('adb shell input keyevent 166')
        case "-":
            os.system('adb shell input keyevent 167')
        case "0":
            os.system('adb shell input keyevent 7')
        case "1":
            os.system('adb shell input keyevent 8')
        case "2":
            os.system('adb shell input keyevent 9')
        case "3":
            os.system('adb shell input keyevent 10')
        case "4":
            os.system('adb shell input keyevent 11')
        case "5":
            os.system('adb shell input keyevent 12')
        case "6":
            os.system('adb shell input keyevent 13')
        case "7":
            os.system('adb shell input keyevent 14')
        case "8":
            os.system('adb shell input keyevent 15')
        case "9":
            os.system('adb shell input keyevent 16')
        case ".":
            os.system('adb shell input keyevent 56')
        case "u":
            os.system('adb shell input keyevent 19')
        case "l":
            os.system('adb shell input keyevent 21')
        case "r":
            os.system('adb shell input keyevent 22')
        case "d":
            os.system('adb shell input keyevent 20')
        case "H":
            os.system('adb shell input keyevent 3')
        case "e":
            os.system('adb shell input keyevent 23')
        case "T":
            os.system('adb shell input keyevent 170')
        case "P":
            os.system('adb shell input keyevent 26')
        case "N":
            os.system('adb shell input keyevent 191')
        case "i":
            os.system('adb shell input keyevent 165')
        case "j":
            os.system('adb shell input keyevent 229')
        case "I":
            os.system('adb shell input keyevent 178')
        case "g":
            os.system('adb shell input keyevent 172')
        case "R":
            os.system('adb shell input keyevent 183')
        case "G":
            os.system('adb shell input keyevent 184')
        case "Y":
            os.system('adb shell input keyevent 185')
        case "B":
            os.system('adb shell input keyevent 186')
        case "b":
            os.system('adb shell input keyevent 4')
        case "S":
            os.system('adb shell input keyevent 175')
        case "H":
            os.system('adb shell input keyevent 259')
        case "Y":
            os.system('adb shell input keyevent 85')
        case "s":
            time.sleep(1)
        case "m":
            time.sleep(60)
        case "q":
            time.sleep(15)
        case "h":
            time.sleep(3600)
`}
        </pre>
      </div>
      <div className="explanation-section">
        <h2>Detailed Explanation</h2>
        <p>
          <strong>Video Recording with Motion Detection:</strong>
          <br />
          The <code>record_video</code> function captures video from the default camera (index 0). It writes the video frames to a file and displays them in a window.
          Motion detection is implemented by comparing the current frame with a static background. If significant movement is detected, it is counted as motion.
          A timestamp is overlaid on each frame to log the exact time the frame was captured.
        </p>
        <p>
          <strong>Log Collection:</strong>
          <br />
          The <code>record_log</code> function captures real-time log data from the connected Android device using ADB. Logs are continuously written to a text file until the logging flag is cleared.
        </p>
        <p>
          <strong>Motion Detection Check:</strong>
          <br />
          The <code>VideoCheck</code> function periodically checks the motion detected in the video. It ensures that the video stream is functional and not just capturing a "black picture". If no motion is detected over multiple checks, the function flags the issue.
        </p>
        <p>
          <strong>Stream File Modification:</strong>
          <br />
          The <code>modifyStreamFile</code> function modifies an XML configuration file used by the streaming application to point to a new stream file. This is necessary for testing different streams.
        </p>
        <p>
          <strong>Automated Application Control:</strong>
          <br />
          The <code>automateATSC</code> function automates interactions with a Windows application (<em>Atsc3Xpress.exe</em>) using the pywinauto library. It opens a stream file in the application and handles dialog windows.
        </p>
        <p>
          <strong>Remote Control Simulation:</strong>
          <br />
          The <code>channelOperation</code> function simulates key presses on the Android device using ADB commands. This is used to simulate remote control operations on the device under test.
        </p>
        <p>
          <strong>Thread Management:</strong>
          <br />
          The script uses threading to run video recording, log collection, and other tasks concurrently. This allows for efficient and simultaneous execution of different processes.
        </p>
        <p>
          <strong>Control Flow:</strong>
          <br />
          The main loop iterates over a list of stream files and runs the video recording and log collection for each stream in a loop. After each iteration, it checks if there were any issues detected (e.g., no motion in the video), and if so, it collects a bug report.
        </p>
      </div>
    </div>
  );
};

export default DigiAutomate;
