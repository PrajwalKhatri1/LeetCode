class Solution {
public:
    double myPow(double x, int n) {
        double result;
        if(x == 0){
            return 0;
        }
        else{
            result = pow(x,n);
        }
        return result;
    }
};
