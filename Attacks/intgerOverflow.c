
/* In mathematics if x>0 and y>0  their sum is always positive x+y >0
but unfortunately  this is not Always true in computer arithmetics:
Here is a counter-example ( integer overflow )


link for online demo: https://godbolt.org/z/4jv5oe6zE
*/



#include <stdio.h>

int main() {
  int a= 2147483640;
  int b= 9;
  int sum= a+b;

if(sum>0){   //Value of INT_MAX is +2147483647.
      printf("Positive sum");
}else{
      printf("Negative sum\n");
}
  
  printf("a+b = %d",sum);
  return 0;
}
