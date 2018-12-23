#include <wiringPi.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <stdint.h>

#define VCC_PIN 0	// GPIO 17
#define DOOR_PIN_1 4 	// GPIO 23
#define DOOR_PIN_2 5	// GPIO 24
#define DOOR_PIN_3 6	// GPIO 25

void init() {

	printf("Init State!\n");
	digitalWrite(DOOR_PIN_1, 0);
	digitalWrite(DOOR_PIN_2, 0);
	digitalWrite(DOOR_PIN_3, 0);
}

void update_state(int num, int val) {
	printf("val is %d\n", val);
	digitalWrite(num, val);
}

void state_loop(char* value) {

	int val = atoi(value);
	int cnt = 4;

	while(1) {
		if(cnt == 7)
			break;

		update_state(cnt++, val%2);
		val >>= 1;
	}
}

int main (int argc,char *argv[]) {

	int i;
    	for (i=0; i < argc; i++)
       		printf("Argument %d is %s\n", i, argv[i]);

	wiringPiSetup();

	if(argc >= 2){
		char* num = argv[1];
		char* value = argv[2];

		if(strcmp(num, "0") == 0)
			init();
		else
			state_loop(value);
	}

	return 0;
}
