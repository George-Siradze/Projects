#include <bits/stdc++.h>

using namespace std;

double ChangeNumber(double num) {
    double integerPart = floor(num);
    double fractionalPart = num - integerPart;
    return integerPart + (fractionalPart / 10.0);
}

void Count_Transformation(double numX, double numY){

    int transformations = 0;

    while (numX != numY) {
        numY = ChangeNumber(numY);
        transformations++;

    }

    cout << "The numbers became equal after " << transformations << " transformations." << endl;

}

int main() {

    double numX;
    double numY;

    cin >> numX >> numY;

    Count_Transformation(numX,numY);

    return 0;
}
