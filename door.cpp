#include <wiringPi.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <stdint.h>

#define VCC_PIN 0	// GPIO 17
#define DOOR_PIN_1 1 	// GPIO 18
#define DOOR_PIN_2 2	// GPIO 27
#define DOOR_PIN_3 3	// GPIO 22

void init(){
	printf("Init DOOR!\n");

	digitalWrite(VCC_PIN, 0);
	digitalWrite(DOOR_PIN_1, 0);
	digitalWrite(DOOR_PIN_2, 0);
	digitalWrite(DOOR_PIN_3, 0);
}
void door_control(int num, char* value) {
	if(strcmp(value, "1") == 0) {
		printf("Door No.%d is opened\n", num);
		digitalWrite(num, 1);
	}
	else {
		printf("Door No.%d is closed\n", num);
		digitalWrite(num, 0);
	}
}

void door_switch(char* num, char* value) {

	if(strcmp(num, "1") == 0)
		door_control(DOOR_PIN_1, value);
	else if(strcmp(num, "2") == 0)
		door_control(DOOR_PIN_2, value);
	else if(strcmp(num, "3") == 0)
		door_control(DOOR_PIN_3, value);
	else
		printf("Invalid Door Number!\n");
}

int main (int argc,char *argv[]) {

	int i;
    for (i=0; i < argc; i++)
        printf("Argument %d is %s\n", i, argv[i]);

	wiringPiSetup();
	pinMode (VCC_PIN, OUTPUT);
	pinMode (DOOR_PIN_1, OUTPUT);
	pinMode (DOOR_PIN_2, OUTPUT);
	pinMode (DOOR_PIN_3, OUTPUT);

	if(argc >= 2){
		char* num = argv[1];
		char* value = argv[2];

		if(strcmp(num, "0") == 0){
			init();
		}
		else {
			door_switch(num, value);
		}
	}
	return 0;
}
