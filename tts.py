import subprocess

out=subprocess.Popen("node testadn4.js 2 2 2 2",shell=True,stdout=subprocess.PIPE).stdout
for i in range(0,19):
	print(out.readline())
