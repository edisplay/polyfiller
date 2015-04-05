# polyfiller

> A polyfill combinator

## Getting Started


Work in progress, see you...


```js
import polyfiller from 'polyfiller';

polyfiller.find([
	{
		name: 'Promise',
		dependencies: true
	}
],
null, (polyfill, name, dependencies) => {
	console.log(name, polyfill.source, polyfill.config);
});
```



1. Описать Мок-объекты
2. Сгенерировать результат (grunt)
3. Запустить результат в браузере (phantomjs + fixture)




ЗАДАЧА:

Нужно написать тесты, которые смогут покрыть модульность кода и функциональность.
Библиотека, которая используется для решения этой задачи умеет множество репортеров, но нет универсального.
Нужно оставить имеющуюся библиотеку и требования к тестированию!


Решение
Запускается все виды тестов!



33
35


15, 34,
1, 16



2, 25, 


1. ПРИНЦИП ДРОБЛЕНИЯ.
а. Разделить объект на независимые части.
б. Выполнить объект разборным.
в. Увеличить степень дробления объекта


15. ПРИНЦИП ДИНАМИЧНОСТИ.
а. Характеристики объекта или внешней среды
должны меняться так, чтобы быть оптимальными на
каждом этапе работы.
б. Разделить объект на части, способные
перемещаться относительно друг друга.
в. Если объект в целом неподвижен, сделать его
подвижным, перемещающимся. 


16. ПРИНЦИП ЧАСТИЧНОГО ИЛИ
ИЗБЫТОЧНОГО ДЕЙСТВИЯ.
Если трудно получить 100% требуемого
действия или эффекта,
надо получить "чуть меньше" или "чуть
больше" - задача при
этом может существенно упроститься. 


34. ПРИНЦИП ОТБРОСА И РЕГЕНЕРАЦИИ
ЧАСТЕЙ.
а. Выполнившая свое назначение или ставшая
ненужной часть объекта должна быть отброшена
(растворена, испарена и т.д.) или видоизменена
непосредственно в ходе работы.
б. Расходуемые части объекта должны быть
восстановлены непосредственно в ходе работы


2. ПРИНЦИП ВЫНЕСЕНИЯ.

Отделить от объекта мешающую часть (мешающее
свойство)
или, наоборот, выделить единственно нужную часть
или нужное свойство.
В отличие от Приема 1, в котором речь идет о
делении объекта на равные части, здесь
предлагается делить объект на разные части. 


25. ПРИНЦИП САМООБСЛУЖИВАНИЯ.
а. Объект должен сам себя обслуживать,
выполнять вспомогательные и ремонтные
операции.
б. Использовать отходы (энергии, вещества). 