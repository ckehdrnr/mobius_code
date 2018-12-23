from tkinter import *

from tkinter import messagebox

import tkinter.font

import ftplib

import sys

from picamera import PiCamera

from time import sleep

from datetime import datetime

import threading

import time

import subprocess
 

'''

filename="AE1_"

print(filename)

#filename += sys.argv[1]

print(filename)

now = datetime.now()

filename += str(now.year)+'.'+str(now.month)+'.'+str(now.day)+' '+str(now.hour)+':'+str(now.minute)+':'+str(now.second)

 

camera = PiCamera()

 

camera.start_preview()

sleep(10)

camera.capture('/home/pi/image/'+filename

camera.stop_preview()

 

 

ftpsv=ftplib.FTP("203.250.148.89")

ftpsv.login("opensource", "openSour")

 

ftpsv.cwd('/image')

 

 

ftpsv.storbinary("STOR blacknote.jpg", open('./'+filename,'rb'))

 

print(filename)

'''

'''

def clickMe():       

        win.destroy()

 

def buy():

    a=1

def withdraw():

    b=1

def sell(self):

    

    win = Tk ()

    win.title("판매")

    win.geometry('200x100+200+200')

 

    name = StringVar()

    name = ""

    print(name)

    cost = StringVar()

    pub = StringVar()

    wrt = StringVar()

 

    bname = Entry(win, width=20, textvariable=name)

    bname.grid(column = 0 , row = 0)

    bcost = Entry(win, width=20, textvariable=cost)

    bcost.grid(column = 0 , row = 1)

    bpub = Entry(win, width=20, textvariable=pub)

    bpub.grid(column = 0 , row = 2)

    bwrt =Entry(win, width=20, textvariable=wrt)

    bwrt.grid(column = 0 , row = 3)

    action=Button(win, text="Click Me", command=clickMe)

    action.grid(column=0, row=4)

 

    win.mainloop()

 

def select_kind(n,win):

    if n==0:

        win.destroy()

        sell()

    elif n==1:

        buy()

    else :

        withdraw()

    

 

 

def initall():

 

   

    win= Tk()

    win.title("선택")

    sellb=Button(win,text="판매",command = sell)

    buyb =Button(win,text="구매",command = buy)

    withdrawb=Button(win,text="회수",command=withdraw)

    sellb.pack()

    buyb.pack()

    withdrawb.pack()

    win.mainloop()  

 

 

initall()

 

'''

class MyApp:

    def __init__(self,parent):

        

        parent.geometry("640x400+100+100")

#        parent.resizable(False,False)

        self.myparent=parent

        self.afont=tkinter.font.Font(size=20)


        self.bfont=tkinter.font.Font(size=15)
        self.camera = PiCamera()


        self.start(parent)

    

    def start(self,parent):

        

       

 

        self.mainframe =Frame(self.myparent)

        #self.mainframe.configure(background="white")

        #self.mainframe.geometry("600x600")

        self.mainframe.pack()

        self.data=1

        

        

        #self.mainframe.configure(background="black")

        #self.mi=PhotoImage(file ="C:/Users/ckehd/Pictures/dd.gif").subsample(3,3)

        self.label=Label(self.mainframe,font=self.bfont,text="열린문이 있으면 닫아주세요\n\n\n 이용하시려면 먼저 인증버튼을 눌러 인증을 해주세요",relief="solid")

        self.label.pack(side="top")

        self.action=Button(self.mainframe, text="사용자 인증",font=self.afont, command=self.Auth)

        self.action.pack(side="top",pady=100)

    def Auth(self):

        self.makeframe()

 

       

 

        self.userID=StringVar()

        self.label=Label(self.mainframe,font=self.bfont,text="아이디를 입력해 주세요",relief="solid")

        self.label.grid(column=0,row=1)

        self.Euser= Entry(self.mainframe, width=20, textvariable=self.userID)

        self.Euser.grid(column=1,row=1)

        self.action=Button(self.mainframe, text="NEXT", command=self.categori)

        self.action.grid(column=0,row=2,pady=100)

       

        self.remaintime=30

        self.t2 = threading.Timer(0,self.time) 

        self.t2.start()

 

       

    def categori(self):

        self.makeframe()

        

        self.sellb=Button(self.mainframe,text="판매",command = self.sell)

        self.buyb =Button(self.mainframe,text="구매",command = self.buy)

        self.withdrawb=Button(self.mainframe,text="회수",command=self.withdraw)

        self.sellb.grid(column=0,row=1)

        self.buyb.grid(column=0,row=2)

        self.withdrawb.grid(column=0,row=3)

 

        self.remaintime=-1

        self.t2.join()

        self.remaintime=40

        

        self.t2 = threading.Timer(0,self.time) 

        self.t2.start()

 

 

 

    def sell(self):

        self.makeframe()

        self.ID=StringVar()

 

        self.name = StringVar()

            

        self.cost = StringVar()

        

        self.pub = StringVar()

        

        self.wrt = StringVar()

        

        

        self.bname = Entry(self.mainframe, width=20, textvariable=self.name)

        self.bname.grid(column = 0 , row = 2)

        self.bcost = Entry(self.mainframe, width=20, textvariable=self.cost)

        self.bcost.grid(column = 0 , row = 3)

        self.bpub = Entry(self.mainframe, width=20, textvariable=self.pub)

        self.bpub.grid(column = 0 , row = 4)

        self.bwrt =Entry(self.mainframe, width=20, textvariable=self.wrt)

        self.bwrt.grid(column = 0 , row = 5)

        self.action=Button(self.mainframe, text="NEXT", command=self.take_picture)

        self.action.grid(column=0, row=6)

        self.action2=Button(self.mainframe, text="HOME", command=self.home)

        self.action2.grid(column=1, row=6)

 

        self.remaintime=-1

        self.t2.join()

        self.remaintime=100

        

        self.t2 = threading.Timer(0,self.time) 

        self.t2.start()

 

    def buy(self):

        self.makeframe()

 

        self.ID = StringVar()
        self.Name=StringVar()

        self.Tid = Entry(self.mainframe, width=20, textvariable=self.ID)

        self.Tid.grid(column = 0 , row = 2)

        self.Tid = Entry(self.mainframe, width=20, textvariable=self.Name)

        self.Tid.grid(column = 0 , row = 3)

        self.action=Button(self.mainframe, text="NEXT", command=self.check)

        self.action.grid(column=0, row=4)

        self.action=Button(self.mainframe, text="HOME", command=self.home)

        self.action.grid(column=0, row=5)

 

        self.remaintime=-1

        self.t2.join()

        self.remaintime=40

        

        self.t2 = threading.Timer(0,self.time) 

        self.t2.start()

 

    def withdraw(self):

        self.makeframe()

        #사물함 ID

        self.ID = StringVar()

        self.Tid = Entry(self.mainframe, width=20, textvariable=self.ID)

        self.Tid.grid(column = 0 , row = 2)

        self.action=Button(self.mainframe, text="NEXT", command=self.usercheck)

        self.action.grid(column=0, row=3)

        self.action=Button(self.mainframe, text="HOME", command=self.home)

        self.action.grid(column=0, row=4)

 

        self.remaintime=-1

        self.t2.join()

        self.remaintime=40

        

        self.t2 = threading.Timer(0,self.time) 

        self.t2.start()

 

    #sell

    def take_picture(self):


        print(self.name.get())

        print(self.cost.get())

        print(self.pub.get())

        print(self.wrt.get())

        
        self.makeframe()

        

        self.action1=Button(self.mainframe, text="NEXT", command=self.regist)

        self.action1.grid(column=0, row=4)

        self.action2=Button(self.mainframe, text="CAPTURE", command=self.capture)

        self.action2.grid(column=0, row=5)

        self.action3=Button(self.mainframe, text="HOME", command=self.home)

        self.action3.grid(column=0, row=6)

        self.remaintime=-1

        self.t2.join()

        self.remaintime=100 

        self.t2 = threading.Timer(0,self.time) 

        self.t2.start()
        
    def capture(self):
        self.t3=threading.Timer(0,self.cap)
        self.t3.start()

    def cap(self):
        self.filename="AE1_"

        

        #filename += sys.argv[1]

        

        now = datetime.now()

        self.filename += str(now.year)+'.'+str(now.month)+'.'+str(now.day)+'_'+str(now.hour)+'_'+str(now.minute)+'_'+str(now.second)

 

        
 

        self.camera.start_preview()
	
        self.url = self.filename+".gif"

        sleep(3)

        self.camera.capture(self.url)

        self.camera.stop_preview() 
        
        self.mi=PhotoImage(file =self.url).subsample(3,3)

        self.label=Label(self.mainframe,image=self.mi,relief="solid")
        self.label.grid(column=0,row=30)
	
        self.label2=Label(self.mainframe,text= "RE_CAPTURE or REGISTER",relief="solid")
        self.label2.grid(column=0,row=31)
        self.action4=Button(self.mainframe, text="REGISTER", command=self.regist)

        self.action4.grid(column=0, row=32)

        self.action5=Button(self.mainframe, text="RE_CAPTURE", command=self.capture)

        self.action5.grid(column=0, row=33)
        self.find_empty()
        print(self.empty+"aaa")
        self.OPEN()



    def regist(self):
        print(self.name.get())

        print(self.cost.get())

        print(self.pub.get())

        print(self.wrt.get())
        self.CLOSE()
        self.exist_up()
	
        self.ftpsv=ftplib.FTP("203.250.148.89")

        self.ftpsv.login("opensource", "openSour")

 

        self.ftpsv.cwd('/image')

 

 

        self.ftpsv.storbinary("STOR "+self.url, open('./'+self.url,'rb'))
        self.ftpsv.quit()
        print(self.empty+"empty") 
        self.con =self.name.get()+":"+self.cost.get()+":"+self.pub.get()+":"+self.wrt.get()+":"+self.userID.get()+":"+self.empty+":7:"+self.url
        self.rn="edu6:"+self.empty+":"+self.name.get()
        #서버에 데이터 올리는 부분 추가필
        print(self.con)

        subprocess.Popen('node testadn4.js 1 '+self.rn+" "+self.con+" /bookinfo",shell=True,stdout=subprocess.PIPE).stdout
        self.makeframe()

        self.action2=Button(self.mainframe, text="HOME", command=self.home)

        self.action2.grid(column=0, row=1)

 

        self.remaintime=-1

        self.tt=7

        self.t = threading.Timer(0,self.thanks)

        self.t.start()

    #buy

    def check(self):

        #책상태확인
        #ck= threading.Timer(0,self.getbook)
        #ck.start()
        #ck.join()        #self.list = self.con.split(':')
        #for i in self.list:
         #	print(i)
        #일정시간후 close안되면 처음으로 돌아가는 코드 필요. 여기서 dos발생가능

        self.makeframe()

        #쓰레드 처리

        self.remaintime=-1

        self.t2.join()

        self.remaintime=300   

        t2 = threading.Timer(0,self.time) 

        t2.start()

        self.action=Button(self.mainframe, text="CLOSE", command=self.CLOSE)

        self.action.grid(column=0, row=1)

 

        self.action2=Button(self.mainframe, text="BUY", command=self.pay)

        self.action2.grid(column=0, row=2)

 
        ck= threading.Timer(0,self.getbook)
        ck.start()
                #self.list = self.con.split(':')
      
 

        self.action3=Button(self.mainframe, text="CANCLE", command=self.cancle)

        self.action3.grid(column=0, row=3)


    def getbook(self):
        self.rn="/edu6:"+self.ID.get()+":"+self.Name.get()
        print(self.rn)
        self.out=subprocess.Popen("node testadn4.js 2 "+self.rn+" 2 /bookinfo",shell=True,stdout=subprocess.PIPE).stdout
        for i in range(0,13):
        	self.chk=self.out.readline()
        self.out.close()
        print(self.chk)
        self.list=[]
        self.chk=str(self.chk)
        print(self.chk+"aaa")
        self.list = self.chk.split(":")
        if(self.list[0]=="b''" or self.list[6]!=self.ID.get()):
                self.makeframe()
                self.label2=Label(self.mainframe,text= "There is no book",relief="solid")
                self.label2.grid(column=0,row=31)
	
                self.remaintime=-1
                self.t2.join()
                self.remaintime=10   

                t2 = threading.Timer(0,self.time) 	

                t2.start()
                t2.join() 	
                return 
        self.con = self.chk.replace("'","")
        self.con = self.con.replace('"',"")
        self.con = self.con.replace("con:","")
        self.con = self.con.replace("b","")
        self.con = self.con.replace("\\n","")
        self.con = self.con.replace("}","")
        self.con = self.con.replace(" ","")
        print(self.con+"aaaaaaaa") 
        print(self.list[0])
        self.OPEN()
	
    def CLOSE(self) :

        now = datetime.now()
	
        self.date = str(now.year)+'.'+str(now.month)+'.'+str(now.day)+'_'+str(now.hour)+'_'+str(now.minute)+'_'+str(now.second)
        if(self.data=='0'):
                subprocess.Popen('node testadn4.js 1 '+self.date+" "+'"'+self.empty+' 0"'+" /Door",shell=True,stdout=subprocess.PIPE).stdout
                return
        #self.rn=self.rn.replace("/","")
        subprocess.Popen('node testadn4.js 1 '+self.date+" "+'"'+self.ID.get()+' 0"'+" /Door",shell=True,stdout=subprocess.PIPE).stdout

    def OPEN(self) :

        now = datetime.now()
        
        self.date = str(now.year)+'.'+str(now.month)+'.'+str(now.day)+'_'+str(now.hour)+'_'+str(now.minute)+'_'+str(now.second)
        if(self.data=='0'):
                   subprocess.Popen('node testadn4.js 1 '+self.date+" "+'"'+self.empty+' 1"'+" /Door",shell=True,stdout=subprocess.PIPE).stdout
                   return 

        #self.rn=self.rn.replace("/","")
        subprocess.Popen('node testadn4.js 1 '+self.date+" "+'"'+self.ID.get()+' 1"'+" /Door",shell=True,stdout=subprocess.PIPE).stdout
        #문닫는 버튼/ 우린 rgb로 하기때문에 버튼으로 구현해야됨,사물함 상태변경
    def exist_up(self):

        now = datetime.now()
        
        self.date = str(now.year)+'.'+str(now.month)+'.'+str(now.day)+'_'+str(now.hour)+'_'+str(now.minute)+'_'+str(now.second)
        num=int(self.empty)
        self.find_state()
        
        print(str(self.state)+" self")
        
        em=int(self.state)+2**(num-1)
        print("em : "+str(em))
        subprocess.Popen('node testadn4.js 1 '+self.date+" "+str(em)+" /exist",shell=True,stdout=subprocess.PIPE).stdout

    def exist_down(self):

        now = datetime.now()
        
        self.date = str(now.year)+'.'+str(now.month)+'.'+str(now.day)+'_'+str(now.hour)+'_'+str(now.minute)+'_'+str(now.second)
        #num=int(self.empty)
        self.find_state()
        
        print(str(self.state)+" self")
        
        em=int(self.state)-2**(int(self.ID.get())-1)
        print("em : "+str(em))
        subprocess.Popen('node testadn4.js 1 '+self.date+" "+str(em)+" /exist",shell=True,stdout=subprocess.PIPE).stdout

	    
    def find_empty(self):
                self.data=1

                for i in range(4,7):	
                        self.get_gpio_value(i)
                        if(self.data=='0'):
                                    break

    def find_state(self):
                
                self.state=0
                for i in range(4,7):	
                        self.gpio_value(i)
                        
                                    
    def get_gpio_value(self,num) :

         cmd = ['gpio', 'read']
         cmd.append(str(num))
         fd_popen = subprocess.Popen(cmd, stdout=subprocess.PIPE).stdout
         self.data = fd_popen.read().strip()
         fd_popen.close()
         self.data = str(self.data)

         self.data = self.data.replace("b", "")
         self.data = self.data.replace("'", "")

         print (self.data)
         if(self.data=='0'):
               self.empty=str(int(num)-3)
 
    def gpio_value(self,num) :

         cmd = ['gpio', 'read']
         cmd.append(str(num))
         fd_popen = subprocess.Popen(cmd, stdout=subprocess.PIPE).stdout
         self.data = fd_popen.read().strip()
         fd_popen.close()
         self.data = str(self.data)

         self.data = self.data.replace("b", "")
         self.data = self.data.replace("'", "")
         print(self.data)
         if(self.data=='1'):
               self.state+=int(self.data)*2**(int(num)-4)
	 
    def pay(self):

        #결재 과정

        #bookinfo 삭제 ,log 추가

        self.mainframe.pack_forget()

        self.mainframe =Frame(self.myparent)

        self.mainframe.pack()

        self.action2=Button(self.mainframe, text="HOME", command=self.home)

        self.action2.grid(column=0, row=1)

	
        self.out=subprocess.Popen("node testadn4.js 3 "+self.rn+" 2 /bookinfo",shell=True,stdout=subprocess.PIPE).stdout 

        self.rn=self.rn.replace("/","")
        subprocess.Popen('node testadn4.js 1 '+self.rn+" "+self.con+" /booklog",shell=True,stdout=subprocess.PIPE).stdout
        self.remaintime=-1

        self.tt=5

        self.CLOSE()
        self.exist_down()
        t = threading.Timer(0,self.thanks)

        t.start()

        

       

    def cancle(self) :

        #여기서 gpio로 닫혀있는지 확인 닫혀있으면home으로
        self.CLOSE()
        self.remaintime=-1

        self.home()

 

 

 

 

    #withdraw

 

    def usercheck(self):

        #데이터 가져와서 같으면 회수 허용 다르면 불가

        # 맞으면 withdraw_allow 틀리면 deny

        #self.withdraw_allow()

        self.withdraw_deny()

 

    def withdraw_allow(self):

        self.makeframe()

 

        

        self.label=Label(self.mainframe,text="책을 가져가 주세요.\n\n\n\n문을 닫아주시기 바랍니다",relief="solid")

        self.label.grid(column=0,row=0)

        self.action=Button(self.mainframe, text="회수완료", command=self.thanks_sub)

        self.action.grid(column=0, row=30)

        self.remaintime=30

        t = threading.Timer(0,self.time)

        t.start()

 

    def withdraw_deny(self):

        self.makeframe()

        self.label=Label(self.mainframe,text="고객님이 등록한 도서가 아닙니다.\n\n보관함 번호를 확인해 주십시오",relief="solid")

        self.label.grid(column=0,row=1)

        self.action2=Button(self.mainframe, text="HOME", command=self.home)

        self.action2.grid(column=0, row=2)

 

       
        self.remaintime=-1
        self.t2.join()
        self.remaintime=5

        t = threading.Timer(0,self.time)

        t.start()

        

 

    def thanks_sub(self):

        self.makeframe()

        self.action2=Button(self.mainframe, text="HOME", command=self.home)

        self.action2.grid(column=0, row=1)

 

        self.remaintime=-1

        self.tt=5

        t = threading.Timer(0,self.thanks)

        t.start()

        

    def home(self):

        self.remaintime=-1

        self.tt=-1

        self.mainframe.pack_forget()

        self.start(self.myparent)

    

 

    def time(self):

        self.label=Label(self.mainframe,text=str(self.remaintime)+"초후 초기화면으로 돌아갑니다.",relief="solid")

        self.label.grid(column=0,row=10)

        while(self.remaintime>0):

            

            self.label["text"]=str(self.remaintime)+"초후 초기화면으로 돌아갑니다."

            self.remaintime-=1

           

            time.sleep(1)

        if self.remaintime==0:

            self.home()

    

    def thanks(self):

            

        self.label=Label(self.mainframe,text="이용해 주셔서 감사합니다.",relief= "solid")

        self.label.grid(column=10,row=1)    

        while(self.tt>0):

            self.tt-=1

            time.sleep(1)

        if self.tt==0:

            self.home()

 

    def makeframe(self):

        self.mainframe.pack_forget()

        self.mainframe =Frame(self.myparent)

       

        self.mainframe.pack()

        

if __name__=='__main__':

    root=Tk()

#    root.configure(background="white")

    myapp=MyApp(root)

    root.mainloop()


