# LeetCode

## 목차
- [Sliding Window](#sliding-window)
- [Longest Common Substring](#longest-common-substring)
- [Two Pointer Technique](#two-pointer-technique)

### 알고리즘 정리

보통은 README파일을 영어로 작성하는 노력을 하는 편이나, 알고리즘 정리 부분은 한글로 작성한다. 이는 스스로의 알고리즘 공부를 위한 것이며 나중에 다시 보는 일을 대비하기 위해서이다. 아무래도 영어는 읽는 노력이 필요하지만 한글은 그냥 읽으면 그만이라서 편하니까. 실제 코드를 보면 주석처리 된 부분들이 있는데, 이는 문제에 어울리는 알고리즘 정답을 확인하기 전에 혼자 풀어보았으나 시간복잡도나 메모리 소비량이 너무 많은 경우의 코드이다. 그러한 상황을 줄이기 위해 알고리즘을 이용한 풀이에 익숙해지고 숙지할 수 있는 연습이 필요하다.

### Sliding Window

위키피디아에 따르면 네트워크상에서 패킷의 흐름을 제어하기 위한 용도로 사용된다고 한다. 제목과 같이 양옆으로 밀어서 여는 방식의 창문처럼 특정 길이의 그룹을 한칸씩 옆으로 옮기면서 작업을 실행하는 알고리즘을 말한다. Leetcode에 있는 [문제](https://leetcode.com/problems/longest-substring-without-repeating-characters/)를 간결하게 만들어서 예로 들겠다.
```
String S = 'aabcecda' 라는 문자열이 있을 때, 같은 문자가 중복되어 들어가 있지 않은 substring의 최대 길이를 찾으라.
```
라는 문제가 있다면, 사실 가장 흔하게 생각할 수 있는 방법은 하나씩 다 해보는 것이다. 이를 무차별 대입(Brute Force)방식이라고 하는데 간단히 말하자면 될때까지 for루프를 돌리는 것이다. 이럴경우 문자열의 길이에 따라 O(n<sup>3</sup>)의 시간복잡도를 가진다. 실제로 이 프로젝트의 위의 문제에서 처음에 그렇게 풀었는데, 코드가 길어지는 건 물론이고 시간이 몇배는 더 걸렸다. 슬라이딩 윈도우를 사용할 경우 루프는 한번이면 된다. 코드는 [깃허브](https://github.com/ninanung/leetcode/blob/master/longest_substring_without_repeating_characters.js)에서 확인하시고, 간단히 원리를 설명하면,
```
a  a  b  c  e  c  d  a
[]
a  a  b  c  e  c  d  a
   []
a  a  b  c  e  c  d  a
   [--]
a  a  b  c  e  c  d  a
   [-----]
a  a  b  c  e  c  d  a
   [--------]
a  a  b  c  e  c  d  a
            [--]
a  a  b  c  e  c  d  a
            [-----]
a  a  b  c  e  c  d  a
            [--------]
```
와 같은 형태로 중복된 것이 있을경우 창문의 길이를 줄이면서 조사하는 것이다. 결과를 보면 최대 길이는 4가 된다. 2가지 경우의 수가 나오지만 어쨌든 둘다 길이는 4이다. 작성된 코드에서는 뒤에있는 `[`괄호를 `start`변수로 설정하고 탐색중인 글자의 자릿수에서 `start`를 뺀 숫자를 기준으로 최대 길이를 계산하는 방식을 사용한다. 이 문제에 대한 시간복잡도는 O(2n)으로 무차별 대입 방식과 비교하면, n이 커질수록 속도의 차이는 더 커진다. 만약 후에 이와 비슷한 방식의 문제가 나온다면 우선 가능한지 시도해 보는 것도 좋다.

### Longest Common Substring

이걸 알고리즘이라고 하기는 뭐하지만, 일단 적어본다. 사용될만한 부분을 생각해 보자면, 검색기능을 구현할 때 substring이 가장 많은 결과를 보여주는 방식으로 쓸 수도 있을 것 같다. 주된 목적은 두개의 문자열이 가지고 있는 가장 긴 동일 부분 문자열을 찾는 것이다. 두개의 문자열을 탐색하기 때문에 기본적으로 시간복잡도는 두 문자열의 길이의 곱인 O(n x m)이다. 기본적인 방법은 두번의 for문을 이용해서 모든 문자열을 탐색하며, 동일한 문자일 경우 임의의 이중배열에 숫자를 표기하여 이전자리에 해당하는 이중배열의 숫자가 0이 아닐경우 +1을 해가면서 결국 가장 숫자가 높은 자리까지의 부분 문자열이 가장 긴 동일 문자열이 되는 것이다. 말로 설명하는 것 보다는 코드를 확인하면 좋은데 간단히는 이러하다.
```javascript
function longestCommonSubstring = (s, n) {
    let substring = '';
    let max = 0;
    let table = makeTable(s, n); //문자열 s와 n을 이용해서 임의의 이중배열을 만드는 가상의 함수
    for(let i = 0; i < s.length; i++) {
        for(let j = 0; j < n.length; j++) {
            if(s[i] === n[j]) {
                if(i === 0 || j === 0) {
                    table[i][j] = 1;
                    if(max === 0) {
                        substring = s[i]
                        max = 1;
                    }
                } else {
                    table[i][j] = table[i - 1][j - 1] + 1;
                    const sliced = s.slice(i + 1 - table[i][j], i + 1)
                    if(sliced.length > max) {
                        substring = sliced
                        max = substring.length
                    }
                }
            }
        }
    }
    return substring;
}
```
문제는 내가 이 방법을 이용해서 [longest-palindromic-substring](https://leetcode.com/problems/longest-palindromic-substring/)문제를 풀려고 했다는 것인데, 특정 문자열과 그 문자열의 반대순서의 부분 문자열은 좌우대칭일 가능성이 높다는 생각 까지는 좋았으나, 결과로 나온 부분 문자열이 꼭 좌우대칭이라는 보장이 없기때문에 좌우대칭인지 아닌지를 판단하는 코드가 들어가면 시간이 더 늘어나는 바람에 망했다.

### Two Pointer Technique

오름차순으로 정렬된 배열 y가 있을 때, 해당 배열에서 두개의 요소를 뽑아 합하면 특정 값 x가 된다고 할때, 요소 두개를 어떻게 구할까? 라는 문제에 대한 해답이 되는 알고리즘이다. 가장 간단하게 생각나는 방법은 당연히 무차별 대입방법으로, 하나의 요소에 대한 다른 요소의 합을 전부 구해봐야 하기 때문에 두번의 루프를 돌리려서 시간복잡도는 O(n<sup>2</sup>)이 된다. 하지만 이 방법을 사용하면 배열의 양쪽 끝에서 시작하여 중심으로 점점 움직이며 탐색하므로 한번의 루프면 된다. 예를 들자면,
```
y = [10, 20, 30, 40, 60, 70]
x = 60

left = 0, right = 5, y[left] + y[right] = 80
left = 0, right = 4, y[left] + y[right] = 70
left = 0, right = 3, y[left] + y[right] = 50
left = 1, right = 3, y[left] + y[right] = 60
```
이러한 방식으로 움직이게 된다. 두 요소의 합이 x보다 크면 right를 줄이고 작으면 left를 늘리면서 적절한 값을 찾는다.  
  
[container-with-most-water](https://leetcode.com/problems/container-with-most-water/)문제를 위해 위와 비슷한 방식을 사용했다. 처음에는 Sliding Window방식으로 탐색하면 되지 않을까 잠깐 생각했으나 여러개의 요소가 아니라 두개의 요소를 뽑아서 비교하는 방식이기 때문에 맞을 것 같지 않아서 결국 이 방법을 찾았다.
```javascript
var maxArea = function(height) {
    let left = 0;
    let right = height.length -1;
    let max = 0;
    while(right - left > 0) {
        if(height[left] < height[right]) {
            max = (right - left) *  height[left] > max ? (right - left) *  height[left] : max
            left++;
        } else {
            max = (right - left) *  height[right] > max ? (right - left) *  height[right] : max
            right--;
        }
    }
    return max;
};
```
코드는 이러한데, 물을 가두기 위한 기둥의 높이가 더 낮은 쪽의 포인트를 옮겨야 한다. 이유는, 높은쪽을 옮기는 것 보다는 낮은쪽을 옮여야 커질 가능성이 생긴다는 것이다. 높은쪽을 옮겨봐야 거리가 좁혀지기 때문에 물의 양이 작아질 수밖에 없지만 낮은쪽을 옮기면 더 커질 가능성이 생긴다는 원리. 나는 이걸 머릿속으로는 이해했지만 설명하라고 하면 어떻게 설명해야 할지 모르겠다.