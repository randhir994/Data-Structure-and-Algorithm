#include <iostream>
#include <queue>

using namespace std;

int main()
{

    queue<int> q;

    q.push(1);
    q.push(2);
    q.push(3);
    q.push(4);

    cout << "Size of queue is : " << q.size() << endl;
    cout << "Front of queue is : " << q.front() << endl;
    q.pop();
    cout << "Front of queue is : " << q.front() << endl;
    cout << "Size of queue is : " << q.size() << endl;

    cout << "queue is empty: " << q.empty() << endl;

    q.pop();
    q.pop();
    q.pop();

    cout << "queue is empty: " << q.empty() << endl;

    return 0;
}