## Lodash

**bold text**

*italicized text*

	> blockquote

1. First item
2. Second item
3. Third item

- First item
- Second item
- Third item

`code`

---

## **_.chunk**
>_.chunk(array, [size=1] )

-*tạo một mảng các pần tử được chia thành các nhóm có độ dài bằng size. Nếu array không thể chiaw đều, phần cuối cùng sẽ là các pẩn tử còn lại*

## **_.compact(aray)**
-*Tạo một mảng với tất cả các giá trị falsey đã bị loại bỏ. Các giá trị false, và là falsey .null0"" underfinedNan*
>__compact([0,1, false, 2, '' , 3])

## **_.concat(aray, [values])**
-*Tạo một mảng mới nối aray với bất kỳ mảng và / hoặc giá trị bổ sung nào.*

**Arguments**

- **aray(Aray): Mảng để nối**

- **\[values](...*): Các giá trị để nối.**

**Lợi Nhuận**

- **(Mảng): trả về mảng mới được nối**

## **_.diference(aray,[Values])**

- *Tạo một mảng các aray giá trị không có trong các mảng đã cho cho khác  bằng cách sử dụng SameValueZero để so sánh bình đẳng. Thứ tự và tham chiếu của các giá trị kết quả được xác định bới mảng đầu tiên*

**Lưu ý**: Không giống như _.pullAll, Phương thức này trả về một mảng mới.

**Arguments**:
- array(Array) : Mảng cần kiểm tra 
- [values] (...Array): Các giá trị cần loại trừ

**Return**
- (Mảng): Trả về mảng giá trị mới được lọc

**Ví Dụ**

>_ _ fifferenceWith([ 2, 1] , [ 2, 3]);

## **_.diferenceBy(array, [values], [iterattee=_.identity])**

- *Phương thức này giống như _.diference ngoại trừ việc nó chấp nhận iteratee cái được gọi cho từng phần từ aray và values để tạo ra tiêu chí mà chúng được so sánh. Thứ tự tham chiều của các giá trị kết quả được xác định bởi mảng đầu tiên. Vòng lặp được gọi với một đối số: (giá trị)*

**Lưu ý**: Không giống như_.pullAllBy
, phương tức này trả về một mảng mới.

**Return**

- **array(Array)**: Mảng cần kiểm tra.*

- **[Value] (...Array):** Các giá trị cần loại trừ.
- **[iteratee=_.identity] (Hàm):** Trìn lặp được gọi cho mỗi phần tử.

**Return**

- **(Mảng):** Trả về mảng giá trị mới được lọc.

**Thí dụ** 
>_ _ differenceBy([2.1, 1.2] , [2. 3 , 3.4], Math.floor);

>_ _differenceBy([ {'x' : 2}, {'x}: 1], [{'x': 1}], 'x')

##  *_.differenceWith(array, [value], [comparator])*

- *Phương tức này giống nư _.diference ngoại trừ việc nó chấp nhận comparator cđược gọi để so sánh các phần tử của arayto values. Thứ tự tham chiếu của các giá trị kết quả được xác định bởi mảng đầu tiên. Bộ so sánh được gọi với hai đối số (arVal, othVal)*

**Lưu ý** Không giống như _.pullAllwith, phương thức này trả về một mảng mới

**Arguments**

- **array (Array): ** Mảng cần kiểm tra.
- **[Values] (...Array):** các giá trị cần loại trừ.

- **[comparator] (Hàm): Bộ so sánh được gọi cho mỗi phần tử.

**Return**
- **Mảng**: Trả về mảng giá trị mới được lọc

- **Ví dụ**

> var object = [{'x': 1, 'y': 2}, {'x': 2, 'y': 1}]

## **_.dropRight(aray, [n=1])

- *Tạo một phần array với các pần từ loại bỏ từ cuối*

**Arguments**

- **array(Array):** Mảng để truy vấn.

- **[n=1] (number)**: Số phần tử để giảm.

**Return**

- **(Mảng):** Trả về lát cắt của array.

**Ví dụ**

> _ _dropRight ([1, 2, 3])

> _ _dropRight([1 , 2, 3], 2);

> _ _ dropRight ([1 , 2, 3], 5);

> _ _ dropRight ([1, 2, 3], 0)

## **_.dropRightWhile(array, [predicate=_.identity])**

- *Tạo một phần array loại trừ trừ các phần tử bị bỏ loại bỏ cho đến khi predicate trả về falsey. Vị từ được gọi với ba đối số : (giá trị, chỉ số , mảng)*

**Tranh Luận**

- **array(Array)**: Mảng để truy vấn.

- **[predicate=_.identity] (function):** Hàm được gọi mỗi lần lặp.

- **return :** Trả về lát cắt của array.

- **ecamble**

> var user = [{'user' : 'barney', 'active': true}, 
{'user': 'fred', 'active': false},
{'user': 'pebbles', 'active': false}];
> _ _dropRigtWhile(user, function(0){return! o . active});

> _ _dropRigtWhile(user, {'user' : 'pebbles', 'active': false})

> _ _ dropRightWhile(user, ['active', false]);

> _ _ dropRightWhile(user, 'active')

## **_.dropWhile(array, [predicate =_.identity])**

- **Tạo  một pần array loại trừ các phần tử bị loại bỏ ngay từ đầu. Các phần tử bị loại bỏ cho đến ki predicate trả về falsey. Vị từ được gọi với ba đối số( giá trị, chỉ số , mảng)**

- **arguments**

- **array (Array):** Mảng để truy vấn

- **[predicate=_.identity] (function):** hàm được gọi mỗi lần lặp

- **return** 
- **(Array):** Trả về lát cắt của array.

- **example** 

> var  users = [{'user': 'barney', 'active': false}  , {'user': 'fred', 'active': false},  {'user': 'pebbles', 'active': true}]

> _.dropwhile({user, {'user': 'barney', 'active': false}});

> _.dropwhile(user, ['active', false])

> _ _dropwhile(user, 'active')

## ** _.fill(array, value, [start=0], [end = array.length])**

- **Fill elements of array with  value up to, but nor including end**

**Note**

**Arguments**

- *array(Array):* The array to fill

- **value(*):** The array to fill array wwith.

- **[start=0] (number):** The start position

- **[end=array.lenght] (number): The end position**

- **return**
**Array:** Return array.

- **Example**

> var array = [1, 2, 3]

## **_.drop(array, [n=1])**

- **creates a slice of array with n element dropped from the beginning**

**Arguments**

- **array (Array): The array to query**

- **[n=1] (number):** The number of element to drop.

**Return**

- **(Array):** Return te slice of array

**Example**

>_.drop([1, 2, 3]) ==> [2, 3];

>_.drop([1, 2, 3], 2); ==>  [3]

>._drop([1, 2, 3], 5); => []

> _.dropt([1, 2, 3]0) => [1, 2, 3]

## **_.dropRight(array, [ n=1 ])

- **Creates a slice of array with n element dropped from the end .**

**Argument**

- **array(Array):** The array to query.

- **[n=1] (number):** The number of elemant to drop

**Return**

- **(array)**: Retuns the slice of

**example**

> _.dropRight([1, 2, 3, ]) => [1, 2];

> _.dropRight([1, 2, 3], 2) => [3]

> _.dropRigt([1, 2, 3], 5) =>[]

>_.dropRight([1 , 2, 3], 0) => [1, 2, 3]