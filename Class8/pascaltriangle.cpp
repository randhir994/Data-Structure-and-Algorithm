#include <iostream>
using namespace std;

int fac(int n){
    int ans;
    for(int i=n;i>0;i--){
        ans*=i;
    }

    return ans;
}

int ncr(int row, int col){
    int result = fac(row)/(fac(row-col)*fac(col));
    return result;
}

int main(){
    

}