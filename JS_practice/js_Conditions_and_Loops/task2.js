const averageGrade = 91;

switch (true) {
  case isNaN(averageGrade) || averageGrade < 0 || averageGrade > 100:
    console.log('Введіть середню оцінку (від 0 до 100).');
    break;
  case averageGrade < 60:
    console.log('Незадовільно');
    break;
  case averageGrade <= 70:
    console.log('Задовільно');
    break;
  case averageGrade <= 80:
    console.log('Добре');
    break;
  case averageGrade <= 90:
    console.log('Дуже добре');
    break;
  case averageGrade <= 100:
    console.log('Відмінно');
    break;
}
