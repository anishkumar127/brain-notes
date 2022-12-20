
Return the _sorted_ string. If there are multiple answers, return **lexicographically largest** of them.

```java
 PriorityQueue<Character> pq = new PriorityQueue<>((Character t, Character o) -> {
			if(map.get(o)==map.get(t)){
				return o-t;
			}
			return map.get(o)-map.get(t);
		});
```
