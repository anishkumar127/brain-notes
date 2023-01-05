```cpp
#include <iostream>
#include <vector>
using namespace std;

void spiralOrder(vector<vector<int>> &matrix){
  int left =0;
  int right =matrix[0].size()-1;  // column
  int top = 0;
  int bottom = matrix.size()-1; // row 
  
  int direction = 0;
  
  // conditon while. top bottom equal and left right equal. and go beyond that it will be terminated.
  while(left<=right and top<=bottom){
    // left -> right 
    if(direction == 0){
      for(int col=left; col<=right; col++){
        cout<<matrix[top][col]<<" "; // col chagne top same;
      }
      top++; // top increase then.
    }else if(direction==1){
      // top -> bottom
      for(int row =top; row<=bottom; row++){
        cout<<matrix[row][right]<<" "; // right same only row increasement.
      }
      right--; // right remove. 
    }else if(direction==2){
      // right -> left;
      for(int col=right; col>=left; col--){
        cout<<matrix[bottom][col]<<" "; // bottom line same only move right to left. 
      }
      bottom--; // then remove bottom.
    }else{
      // bottom -> top
      for(int row=bottom; row>=top; row--){
        cout<<matrix[row][left]<<" "; // row remove and left remain same.
      }
      left++; // left increase. now move to right side.
    }
    direction= (direction+1)%4; // so it will be between 0,1,2,3 ; if 4%4 = 0; then again move same.
  }
  return;
}
int main() 
{
   int n,m;
   cin>>n>>m;
   // n*m 
   vector<vector<int>> matrix (n, vector<int>(m));
  
  // input taking 2D matrix n*m 
  for(int i=0; i<n; i++){
    for(int j=0; j<m; j++){
      cin>>matrix[i][j];
    }
  }
  
  spiralOrder(matrix);
    return 0;
}


```
3 3
1 2 3 4 5 6 7 8 9

Output:

1 2 3 6 9 8 7 4 5

![](https://i.imgur.com/SOrqmM6.png)





![](https://i.imgur.com/gdNiPrH.png)



![](https://i.imgur.com/ggtXWZX.png)



![](https://i.imgur.com/Xl8PH7J.png)



![](https://i.imgur.com/qgFQ6U0.png)




![](https://i.imgur.com/7nz5UQf.png)



when direction change matrix shrink




![](https://i.imgur.com/JaMBwv8.png)


