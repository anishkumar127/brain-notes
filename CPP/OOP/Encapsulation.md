# class created
```cpp
#include<iostream>

using namespace std;

  

class Student{

    private:

    string name;

    int age;

    int height;

  

    public:

    int getAge(){

        return this->age;

    }

};

  

int main(){

  

    return 0;

}
```



by default private. inside the part of class.


# everything running good check

```cpp
#include<iostream>

using namespace std;

  

class Student{

    private: // by default private

    string name;

    int age;

    int height;

  

    public:

    int getAge(){

        return this->age;

    }

};

  

int main(){

  

// create object

Student first;

cout<< "everything running good "<<endl;

    return 0;

}
```




