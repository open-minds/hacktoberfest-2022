
/*
The Idea behind this small C pg is to illustrate the buffer overflow attack
By running this program, the console asks you to enter a password:
  if you enter any string  < 15 characters, the program will have the expected behaviour.
  if you enter any string  > 15  characters, it will overwrite the content of pass variable.
Depending on the new content of pass such that pass != 0 it will print :  "Root privileges given to the user" 
 
*/

//link of online demo: https://godbolt.org/z/sMd1jbEej 



#include <stdio.h>
#include <string.h>

int main(void)
{
    char buff[15];
    int pass = 0;

    printf("\n Enter the password : \n");
    gets(buff);

    if(strcmp(buff, "easyPassword"))
    {
        printf ("\n Wrong Password \n");
    }
    else
    {
        printf ("\n Correct Password \n");
        pass = 1;
    }

    if(pass)
    {
       /* Now Give root or admin rights to user*/
        printf ("\n Root privileges given to the user \n");
    }

    return 0;
}

