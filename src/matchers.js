export default function matchersPersons(heroes) {
  const sortItem = heroes.sort((a, b) => b.health - a.health);
  return sortItem;
}
