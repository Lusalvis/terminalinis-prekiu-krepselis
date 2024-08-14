export function shoppingList(cart) {
    if (cart.length === 0) {
        return "Šiuo metu, jūsų prekių krepšelis yra tuščias.";
    }

    let result = `Jūsų prekių krepšelyje yra ${cart.length} prekė${cart.length > 1 ? 's' : ''}:\n`;
    result += "-----------------------------------------------------------\n";
    result += "Pavadinimas  | Kiekis      | Vieneto kaina | Viso mokėti\n";
    result += "-----------------------------------------------------------\n";

    cart.forEach((item, index) => {
        const total = (item.unitPrice / 100 * item.amount).toFixed(2);
        const pricePerUnit = (item.unitPrice / 100).toFixed(2);

        result += `${index + 1}. ${item.name.padEnd(9)} | ${item.amount.toLocaleString()} vnt | ${pricePerUnit.padStart(5)} Eur      | ${total.padStart(10)} Eur\n`;
    });

    result += "-----------------------------------------------------------";

    return result;
}
