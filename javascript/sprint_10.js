"use strict";
class Test_00 {
    data = 'Test class';
}
// Task 01
// Создан класс Test_00, который не делает ничего полезного, на нем мы отработаем базовые возможности наследования. Итак, создайте класс Test_01, который наследуется от Test_00. Выведите в консоль Test_01. Убедитесь, что в классе Test_01 доступно свойство data.  
class Test_01 extends Test_00 {
}
// Для проверки кода снимите комментарий ниже
const obj_01 = new Test_01();
console.log(obj_01);
// Task 02
// Наследуйтесьот класса Test_00, создайте класс Test_02, добавьте в него свойство title, равное 'class 02'. Создайте объект на основе класса Test_02 и выведите в консоль. Убедитесь что объект содержит свойства класса Test_00 и Test_02.
// тут пишем класс
class Test_02 extends Test_00 {
    title = 'class 02';
}
// Для проверки кода снимите комментарий ниже
const obj_02 = new Test_02();
console.log(obj_02);
// Task 03
// Создайте класс Test_03, которій наследуется от класса Test_02 и добавляет метод showData(), который содержит одну строку console.log(this.data, this.title). Создайте объект и убедитесь, что метод работает. 
class Test_03 extends Test_02 {
    showData() {
        console.log(this.data, this.title);
    }
}
// Для проверки кода снимите комментарий ниже
const obj_03 = new Test_03();
obj_03.showData();
// Task 04
// Наследуйтесьот класса Test_03 создайте класс Test_04. Добавьте функцию конструктор, которая принимает два текстовых параметра и задает с помощью них значения this.data и this.title. Не забывайте, если вы переписываете, создаете заново функцию конструктор, то обязаны вызывать super().
class Test_04 extends Test_03 {
    constructor(data, title) {
        super();
        this.data = data;
        this.title = title;
    }
}
// Для проверки кода снимите комментарий ниже
const obj_04 = new Test_04('comon', 'hamon');
obj_04.showData();
// Task 05
// Итак, мы можем наследоваться и добавлять в наследуемые классы и свойства и методы и даже метод конструктор. Добавлять методы можно двумя способами - просто полной перезаписью метода, либо (второй способ) - дополнением. Давайте рассмотрим метод полной перезаписи. Посмотрите на класс M_00. Он содержит метод goMath(). Создадим класс M_05, который наследуется от M_00 и полностью перезаписывает метод goMath() следующим кодом: return this.a * this.b; 
// Обратите внимание - тут не нужен super().
class M_00 {
    a = 5;
    b = 7;
    goMath() {
        return this.a + this.b;
    }
}
class M_05 extends M_00 {
    goMath() {
        return this.a * this.b;
    }
}
// Для проверки кода снимите комментарий ниже
const obj_05 = new M_05();
console.log(obj_05.goMath()); // 35
// Task 06
// В предыдущем примере мы перезаписали метод полностью. Теперь - давайте дополним и расширим существующий метод. Поскольку в классе M_00 метод возвращает значение (return), то сделаем следующее... Создайте класс M_06 расширяющий M_00. Напишите ему метод goMath, со следующим кодом:
// const n = super.goMath();
// return n % 2 === 0 ? 1 : 0;
// т.е. строкой n = super.goMath() мы выполняем код из метода родителя (суммируем числа), а в данном методе проверяем является ли число четным.
class M_06 extends M_00 {
    goMath() {
        const n = super.goMath();
        return n % 2 === 0 ? 1 : 0;
    }
}
// тут пишем класс
// Для проверки кода снимите комментарий ниже
const obj_06 = new M_06();
console.log(obj_06.goMath());
// Task 07
// Обратите внимание, метод goMath() в классе M_06 был бы логичнее если бы возвращал значение true, false. Однако тогда мы нарушаем идеологию наследования и ООП. Т.е. мы изменяем в принципе метод, тип данных и т.д. В таком случае правильнее сделать новый метод, который и будет реализовывать данное поведение. Создайте класс M_07, который наследуется от M_00 и содержит метод isEven с кодом:
// const n = super.goMath();
// return n % 2 === 0;
// Проверьте роботу. Я надеюсь, что и в предыдущем и в текущих заданиях вы не забываете указывать тип данных, который возвращает метод. 
class M_07 extends M_00 {
    isEven() {
        const n = super.goMath();
        return n % 2 === 0;
    }
}
// Для проверки кода снимите комментарий ниже
const obj_07 = new M_07();
console.log(obj_07.isEven());
// Task 08
// Итак, мы разобрались с наследованием методов. Давайте разберемся с конструктором. Пусть есть класс P_00. Он содержит одной свойство и конструктор. Напишите класс P_08, который наследуется от P_00 и добавляет свойство b : number. Также расширьте функцию конструктор, который принимает два числа, одно через super посылает в конструктор родителя, второе задает свойству b.
class P_00 {
    a;
    constructor(a) {
        this.a = a;
    }
}
class P_08 extends P_00 {
    b;
    constructor(a, b) {
        super(a);
        this.b = b;
    }
}
// тут пишем класс P_08
// Для проверки кода снимите комментарий ниже
const obj = new P_08(3, 7);
console.log(obj.a + obj.b);
// Task 09
// Создайте класс наследник P_09 для класса P_08. В классе  P_09 добавьте свойство sum равное нулю. Добавьте метод mathSum(), который суммирует this.a и this.b  и кладет результат в this.sum. 
class P_09 extends P_08 {
    sum = 0;
    mathSum() {
        this.sum = this.a + this.b;
    }
}
// тут пишем класс
// Для проверки кода снимите комментарий ниже
const obj_09 = new P_09(20, 30);
obj_09.mathSum();
console.log(obj_09);
// Task 10
// Создайте класс P_10 как наследника P_09. Добавьте метод isSumEven, который возвращает true если сумма - четная и false в остальных случаях. 
// тут пишем класс
class P_10 extends P_09 {
    isSumEven() {
        this.mathSum();
        return this.sum % 2 === 0;
    }
}
// Для проверки кода снимите комментарий ниже
const obj_10 = new P_10(22, 33);
console.log(obj_10.isSumEven());
// Task 11
// Теперь перейдем к более интересным вещам. Давайте пройдемся по базовым примерам фронтенда. Создайте класс U_01, который содержит свойства username, email, status (число, по умолчанию 0), password. Поля username, email, password заполняются через конструктор. 
class U_01 {
    username;
    email;
    status = 0;
    password;
    constructor(username, email, password) {
        this.username = username,
            this.email = email,
            this.password = password;
    }
}
// тут пишем класс
// Для проверки кода снимите комментарий ниже
const user_01 = new U_01('alex', 'alex@mail.ua', 'qwerty');
console.log(user_01);
// Task 12
// Создайте класс U_02, который наследуется от U_01. Допишите метод prepare(), который получает аргумент s (строку), обрезает пробелы и переводит текст в нижний регистр, возвращая результат. 
class U_02 extends U_01 {
    prepare(s) {
        return s.trim().toLowerCase();
    }
}
// Для проверки кода снимите комментарий ниже
const user_02 = new U_02('alEx', 'alex@mail.ua', 'qwerty');
console.log(user_02.prepare('alEx'));
// Task 13
// Создайте класс U_03, наследуйтесь от класса U_02, и допишите свойство isPasswordCorrect (по умолчанию false) и метод validatePassword, который делает следующее:
// удаляет пробелы по краям пароля. 
// проверяет длину пароля. Если длина меньше 8 символов, то выставляет this.isPasswordCorrect равным false и возвращает false.
// проверяет что в пароле есть символы в разных регистрах - если нет то  выставляет this.isPasswordCorrect равным false и возвращает false.
// если проверки пройдены то выставляет this.isPasswordCorrect равным true и возвращает true.
class U_03 extends U_02 {
    isPasswordCorrect = false;
    validatePassword() {
        this.password = this.password.trim();
        if (this.password.length < 8) {
            this.isPasswordCorrect = false;
        }
        return this.isPasswordCorrect;
    }
}
// тут пишем класс
// Для проверки кода снимите комментарий ниже
const user_03 = new U_03('alex', 'alex@mail.ua', 'querty123');
user_03.validatePassword();
console.log(user_03.isPasswordCorrect);
console.log(user_03);
// Task 14
// Создайте класс U_04 который наследуется от U_03 и добавьте в него свойство isEmailCorrect равное false. Напишите метод validateEmail, который валидирует емейл. Если валидация не пройдена, то isEmailCorrect ставится как false, и возвращается false. Если пройдена, то isEmailCorrect ставится как true, и возвращается true. Перед валидацией email примените к свойству this.email метод prepare. Т.е. измените само свойство this.email.
// для валидации используйте 
// const regEx =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// if (!regEx.test(this.email)) return false;
// тут пишем класс
// Для проверки кода снимите комментарий ниже
// const user_04 =  new U_04('alex', 'aleX@maiL.ua', 'querty123');
// user_04.validateEmail();
// console.log(user_04.isEmailCorrect);
// Task 15
// Создайте класс U_05, Наследуйтесьот U_04. Добавьте в класс свойство isUserValid, равный false. Добавьте метод validateUser, который выполняет валидацию eмайл и пароля. Если обе валидации true, и имя пользователя не пустая строка, то ставит isUserValid равное true и возвращает true. В противном случае false. 
// тут пишем класс
// Для проверки кода снимите комментарий ниже
// const user_05 =  new U_05('alex', 'aleX@maiL.ua', 'quertTy123');
// user_05.validateUser();
// console.log(user_05);
//# sourceMappingURL=sprint_10.js.map