#include <iostream>
#include <algorithm>

using std::cin;
using std::cout;
using std::endl;

bool check(int v, int t) {
    int s = v;
    while (v > 0) {
        s += v % 10;
        v /= 10;
    }

    return s == t;
}

int main() {
    int n = 0;
    cin >> n;

    auto nn = n;
    auto found = false;
    for (int i = n; i > 0; --i) {
        if (check(i, n)) {
            nn = std::min(i, nn);
            found = true;
        }
    }

    cout << (found ? nn : 0);

    return 0;
}
