```cpp
#include <iostream>

using namespace std;

  

// human class

class Human

{

public:

    int height;

    int weight;

    int age;

  

public:

    int getAge()

    {

        return this->age;

    }

    void setWeight(int w)

    {

        this->weight = w;

    }

};

  

// class Human inherit to Male class.

class Male: public Human{

    public:

    string color;

  

    void sleep(){

        cout<<"Male is Sleeping"<<endl;

    }

};

  

int main()

{

    // create object male class

    Male object1;

    cout<<object1.age<<endl;

    cout<<object1.weight<<endl;

    cout<<object1.height<<endl;

  

    cout<<object1.color <<endl;

  

    object1.sleep();

    return 0;

};
```

output
```
632248941
2009129328
6422476

Male is Sleeping
```



object1 have all the properties

![](https://i.imgur.com/548RPF0.png)


u can see in the screen shot.


there is a doubt

![](https://i.imgur.com/HIg95JD.png)







male only have the proprity of the colors ? right so how can he use age and weight. and height

? 

because of we intherit the proproty from the class Human. above we inherited the human class. using Public access modifier and then the class name. which we want to inherit.


![](https://i.imgur.com/YjiX1rG.png)


getting the garbage value and the . empty space for colors. and sleep method running.


# set weight

```cpp
#include <iostream>

using namespace std;

  

// human class

class Human

{

public:

    int height;

    int weight;

    int age;

  

public:

    int getAge()

    {

        return this->age;

    }

    void setWeight(int w)

    {

        this->weight = w;

    }

};

  

// class Human inherit to Male class.

class Male: public Human{

    public:

    string color;

  

    void sleep(){

        cout<<"Male is Sleeping"<<endl;

    }

};

  

int main()

{

    // create object male class

    Male object1;

    cout<<object1.age<<endl;

    cout<<object1.weight<<endl;

    cout<<object1.height<<endl;

  

    cout<<object1.color <<endl;

  

    // set the weight

  

    object1.setWeight(88);

    cout<<object1.weight<<endl;

    object1.sleep();

    return 0;

};
```

output
```
-1814556941
2009129328
6422476

88
Male is Sleeping
```





# Public

![](https://i.imgur.com/DnFdB5Q.png)



so  mene human class me public  krke dala hua tha data then mene public mode use krke
usko inherit kia male class me to uske ander bhi wo public ban gyi male class me bhi
to uska data koi bhi access kr skta hai.


# private
![](https://i.imgur.com/gHdy0Mk.png)


![](https://i.imgur.com/n60bMXI.png)




ager human class ke ander private kia hua hai to. or hum use male class me public mode ka use krke inherit krke use kr rahe hai to
wo not accessable hoga. usko access hi nahi kr payenge.


# example

age private
![](https://i.imgur.com/lYxj9yj.png)


now trying to access that in male class its giving the error

![](https://i.imgur.com/vI29HgB.png)


we not able to access that age now.

we got error
![](https://i.imgur.com/LiPbGaC.png)




# Learn all combinations. all 9 


# 1. public 

![](https://i.imgur.com/vMEmuUW.png)


if super class public  and inherit public then it will be public. kahi bhi access kr skte hai.

![](https://i.imgur.com/FiGiCa6.png)


ager public super class ho  sub class me private krke inherit krenge to privaet ayega.

ager super class public hai or usko protected krke intherit krenge to protected hi ayega.


# 2. protected
![](https://i.imgur.com/NUw4DnB.png)


ager super class protected hai to usko sub class me public krke access kr rahe h to wo protected hi rahega.

2nd ager super class protected hai to usk0o sub class me protected krke acess kr rahe h to wo protected hi rahega

3rd ager super class protected hai to usko sub class me private kre inherit kr rahe h to wo private hi rahega.



3. private
4. ![](https://i.imgur.com/7DvRDoK.png)


if super class is private then if we use public protected or private inherit that. and try to inherit super class to sub class. then its all will be the NA . na means not accessible.

tha'ts means super class can not be inherit.




# code Example

# 1. public

```cpp
#include <iostream>

using namespace std;

  

// human class

class Human

{

public:

    int height;

    int weight;

    private:

    int age;

  

public:

    int getAge()

    {

        return this->age;

    }

    void setWeight(int w)

    {

        this->weight = w;

    }

};

  

// class Human inherit to Male class.

class Male: public Human{

    public:

    string color;

  

    void sleep(){

        cout<<"Male is Sleeping"<<endl;

    }

};

  

int main()

{

    // create object male class

   Male m1;

   cout<<m1.height<<endl;

    return 0;

};
```

![](https://i.imgur.com/OkBTjcP.png)


height is public in the super class. and we are using public keyword and inherit as a public in the subclass male. then it will be the public. and anyone can access that.

# 1.1 Public as a Protected access

```cpp
#include <iostream>

using namespace std;

  

// human class

class Human

{

public:

    int height;

    int weight;

    private:

    int age;

  

public:

    int getAge()

    {

        return this->age;

    }

    void setWeight(int w)

    {

        this->weight = w;

    }

};

  

// class Human inherit to Male class.

class Male: protected Human{

    public:

    string color;

  

    void sleep(){

        cout<<"Male is Sleeping"<<endl;

    }

};

  

int main()

{

    // create object male class

   Male m1;

   cout<<m1.height<<endl;

    return 0;

};
```
give error.


![](https://i.imgur.com/kUBbqC0.png)


![](https://i.imgur.com/r7Xq8lp.png)


![](https://i.imgur.com/vwbQM67.png)


![](https://i.imgur.com/dfLOd8d.png)


so that;'s ' way cannot use. because its working like the private.

but we can use that inside the subclass.

so here is the example how we can access and use that.

```cpp
#include <iostream>

using namespace std;

  

// human class

class Human

{

public:

    int height;

    int weight;

    private:

    int age;

  

public:

    int getAge()

    {

        return this->age;

    }

    void setWeight(int w)

    {

        this->weight = w;

    }

};

  

// class Human inherit to Male class.

class Male: protected Human{

    public:

    string color;

  

    void sleep(){

        cout<<"Male is Sleeping"<<endl;

    }

  

    int getHeight(){

      return this->height;

    }

};

  

int main()

{

    // create object male class

   Male m1;

  

   cout<<m1.getHeight()<<endl;

  
  

    return 0;

};
```


so we are using the subclass. inside the subclasss. we are making the getHeight method. and then returning the height from that method.
and then we try to use the object. and trying to the access that method. and from that getHeight method we are getting and able to access the height.
and its working fine.


![](https://i.imgur.com/zXVhm2Y.png)

![](https://i.imgur.com/ZLoU37v.png)




so this case i am ony able to use inside the own class. or derived class. or sub class or child class.
but can't able to use outside the class.

possible that below image.
![](https://i.imgur.com/oDwDb8r.png)


so we can use the getter and setter.



# 1.2 Public  -> Private


```cpp
#include <iostream>

using namespace std;

  

// human class

class Human

{

public:

    int height;

    int weight;

  

private:

    int age;

  

public:

    int getAge()

    {

        return this->age;

    }

    void setWeight(int w)

    {

        this->weight = w;

    }

};

  

// class Human inherit to Male class.

class Male : private Human

{

public:

    string color;

  

    void sleep()

    {

        cout << "Male is Sleeping" << endl;

    }


};

  

int main()

{

    // create object male class

    Male m1;

    cout<<m1.height<<endl;



    return 0;

};
```
 it will throw the error code will not work.
not able to access
![](https://i.imgur.com/uE4EQUk.png)


superclass inherit as a private.
![](https://i.imgur.com/6zwQD8f.png)


so not able to access that height. 

![](https://i.imgur.com/Y5v9vAv.png)




so for works that. what we will do. we can access inside the class. so we will create the getter method.

`
```cpp
#include <iostream>

using namespace std;

  

// human class

class Human

{

public:

    int height;

    int weight;

  

private:

    int age;

  

public:

    int getAge()

    {

        return this->age;

    }

    void setWeight(int w)

    {

        this->weight = w;

    }

};

  

// class Human inherit to Male class.

class Male : private Human

{

public:

    string color;

  

    void sleep()

    {

        cout << "Male is Sleeping" << endl;

    }

  

    int getHeight()

    {

        return this->height;

    }

};

  

int main()

{

    // create object male class

    Male m1;

  

    cout << m1.getHeight() << endl;

  

    return 0;

};
```

that's will work fine.






# 2. Protected 

# 2.1 Protected -> public

```cpp
#include <iostream>

using namespace std;

  

// human class

class Human

{

protected:

    int height;

  

public:

    int weight;

  

private:

    int age;

  

public:

    int getAge()

    {

        return this->age;

    }

    void setWeight(int w)

    {

        this->weight = w;

    }

};

  

// class Human inherit to Male class.

class Male : public Human

{

public:

    string color;

  

    void sleep()

    {

        cout << "Male is Sleeping" << endl;

    }

  

    }

};

  

int main()

{

    // create object male class

    Male m1;

    cout<<m1.height<<endl;

  

    return 0;

};
```


it will be throw the error above code.

![](https://i.imgur.com/sfkhLJn.png)


so if subclass and a public but super class as a protected. then it will be the protected.
and that's we only able to access via inside class. and the child class. 

```cpp
#include <iostream>

using namespace std;

  

// human class

class Human

{

protected:

    int height;

  

public:

    int weight;

  

private:

    int age;

  

public:

    int getAge()

    {

        return this->age;

    }

    void setWeight(int w)

    {

        this->weight = w;

    }

};

  

// class Human inherit to Male class.

class Male : public Human

{

public:

    string color;

  

    void sleep()

    {

        cout << "Male is Sleeping" << endl;

    }

  

    int getHeight()

    {

        return this->height;

    }

};

  

int main()

{

    // create object male class

    Male m1;

  

    cout << m1.getHeight() << endl;

  

    return 0;

};
```



using getter method we can access that inside the class.


# 2.2 protected -> protected

```cpp
#include <iostream>

using namespace std;

  

// human class

class Human

{

protected:

    int height;

  

public:

    int weight;

  

private:

    int age;

  

public:

    int getAge()

    {

        return this->age;

    }

    void setWeight(int w)

    {

        this->weight = w;

    }

};

  

// class Human inherit to Male class.

class Male : protected Human

{

public:

    string color;

  

    void sleep()

    {

        cout << "Male is Sleeping" << endl;

    }

  


};

  

int main()

{

    // create object male class

    Male m1;

    cout<<m1.height<<endl;

  

    return 0;

};
```

it will throw the error. it will not work. 
because superclass protected and subclass protected inherit then it will be the protected.


how can access this ?

we can use the using getter and setter.

```cpp
#include <iostream>

using namespace std;

  

// human class

class Human

{

protected:

    int height;

  

public:

    int weight;

  

private:

    int age;

  

public:

    int getAge()

    {

        return this->age;

    }

    void setWeight(int w)

    {

        this->weight = w;

    }

};

  

// class Human inherit to Male class.

class Male : protected Human

{

public:

    string color;

  

    void sleep()

    {

        cout << "Male is Sleeping" << endl;

    }

  

    int getHeight()

    {

        return this->height;

    }

};

  

int main()

{

    // create object male class

    Male m1;

    cout << m1.getHeight() << endl;

  

    return 0;

};
```

that's above code will work fine.
it will work the inside the class and the child class.


# 2.3 protected private.

if will work only inside the inside the class.

```cpp
#include <iostream>

using namespace std;

  

// human class

class Human

{

protected:

    int height;

  

public:

    int weight;

  

private:

    int age;

  

public:

    int getAge()

    {

        return this->age;

    }

    void setWeight(int w)

    {

        this->weight = w;

    }

};

  

// class Human inherit to Male class.

class Male : private Human

{

public:

    string color;

  

    void sleep()

    {

        cout << "Male is Sleeping" << endl;

    }

  

};

  

int main()

{

    // create object male class

    Male m1;

    cout<<m1.height<<endl;


  

    return 0;

};
```

it will throw the error. and said height is the private.


if we use getter and setter it will run fine.

```cpp
#include <iostream>

using namespace std;

  

// human class

class Human

{

protected:

    int height;

  

public:

    int weight;

  

private:

    int age;

  

public:

    int getAge()

    {

        return this->age;

    }

    void setWeight(int w)

    {

        this->weight = w;

    }

};

  

// class Human inherit to Male class.

class Male : private Human

{

public:

    string color;

  

    void sleep()

    {

        cout << "Male is Sleeping" << endl;

    }

  

    int getHeight()

    {

        return this->height;

    }

};

  

int main()

{

    // create object male class

    Male m1;

    cout << m1.getHeight() << endl;

  

    return 0;

};
```

its working fine. using getter and setters.



# 3. Private

# 3.1 Private -> Public


```cpp
#include <iostream>

using namespace std;

  

// human class

class Human

{

private:

    int height;

  

public:

    int weight;

  

private:

    int age;

  

public:

    int getAge()

    {

        return this->age;

    }

    void setWeight(int w)

    {

        this->weight = w;

    }

};

  

// class Human inherit to Male class.

class Male : public Human

{

public:

    string color;

  

    void sleep()

    {

        cout << "Male is Sleeping" << endl;

    }

  

    int getHeight()

    {

        return this->height;

    }

};

  

int main()

{

    // create object male class

    Male m1;

    cout<<m1.height<<endl;

  
  
  

    cout << m1.getHeight() << endl;

  

    return 0;

};
```

its throwing the error. getter also not working. because we not able to inherit the private.


not working
![](https://i.imgur.com/nHcia9J.png)


# 3.2 Private -> protected

```cpp
#include <iostream>

using namespace std;

  

// human class

class Human

{

private:

    int height;

  

public:

    int weight;

  

private:

    int age;

  

public:

    int getAge()

    {

        return this->age;

    }

    void setWeight(int w)

    {

        this->weight = w;

    }

};

  

// class Human inherit to Male class.

class Male : protected Human

{

public:

    string color;

  

    void sleep()

    {

        cout << "Male is Sleeping" << endl;

    }

  

    int getHeight()

    {

        return this->height;

    }

};

  

int main()

{

    // create object male class

    Male m1;

    cout<<m1.height<<endl;

  
  
  

    cout << m1.getHeight() << endl;

  

    return 0;

};
```

getter setter also not working this. because private not able to access. and inherit.


# 3.2 Private -> Private

```cpp
#include <iostream>

using namespace std;

  

// human class

class Human

{

private:

    int height;

  

public:

    int weight;

  

private:

    int age;

  

public:

    int getAge()

    {

        return this->age;

    }

    void setWeight(int w)

    {

        this->weight = w;

    }

};

  

// class Human inherit to Male class.

class Male : private Human

{

public:

    string color;

  

    void sleep()

    {

        cout << "Male is Sleeping" << endl;

    }

  

    int getHeight()

    {

        return this->height;

    }

};

  

int main()

{

    // create object male class

    Male m1;

    cout<<m1.height<<endl;

  
  
  

    cout << m1.getHeight() << endl;

  

    return 0;

};
```

in that's also not work getter and setter. also.



so private case we not  able to access any of access modifier. 


so kisi bhi class ke private memeber ko hum inherit nahi kr sakte hai.

so hum private member ko access kr hi nahi skte.




# Access modifiers Table

![](https://i.imgur.com/iIACme4.png)
