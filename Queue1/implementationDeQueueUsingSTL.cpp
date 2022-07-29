#include <iostream>
#include <queue>

using namespace std;

int main()
{

    deque<int> dq;

    dq.push_front(1);
    dq.push_back(2);

    cout << "front of queue is : " << dq.front() << endl;
    cout << "Back of queue is : " << dq.back() << endl;

    cout << "Size of queue is : " << dq.size() << endl;

    dq.pop_front();
    dq.pop_back();

    cout << "Size of queue is : " << dq.size() << endl;

    cout << "front of queue is : " << dq.front() << endl;
    cout << "Back of queue is : " << dq.back() << endl;

    cout << "queue is empty: " << dq.empty() << endl;

    return 0;
}