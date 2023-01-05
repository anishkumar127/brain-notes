


the issue is the function name same. then its confused which should use.

![](https://i.imgur.com/CxxsJKr.png)


so avoid this issue. we use the method or function which is the
**Scope resolution Operator**


![](https://i.imgur.com/9Yjsz5A.png)






# Examples.

```cpp
#include <iostream>

using namespace std;

// Hierarchal Inheritance.

class A

{

public:

    void func()

    {

        cout << "I am A" << endl;

    }

};

  

class B

{

public:

    void func()

    {

        cout << "I am B" << endl;

    }

};

  

class C : public A , public B{

  

};

  

int main()

{

    // create object

  C obj;

  

  obj.func();

  
  

    return 0;

}
```

this will give the error becausae it doesn't know which func should called A or B.



# now its work after using ::


```cpp
#include <iostream>

using namespace std;

// Hierarchal Inheritance.

class A

{

public:

    void func()

    {

        cout << "I am A" << endl;

    }

};

  

class B

{

public:

    void func()

    {

        cout << "I am B" << endl;

    }

};

  

class C : public A , public B{

  

};

  

int main()

{

    // create object

  C obj;

  

   obj.A::func();

  

   obj.B::func();

  
  

    return 0;

}
```


output
I am A
I am B


its working fine now. after the using the **::** scope resolution operator.


