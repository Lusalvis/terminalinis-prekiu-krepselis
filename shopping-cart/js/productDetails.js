export function productDetails(cart, id) {
    if (cart.length === 0) {
        return 'Prekė, su ID: ' + id + ' neegzistuoja, nes krepšelis yra tuščias.';
    } else if (!Number.isInteger(id)){ 
        return 'Reikia įvesti prekės ID, kuris yra sveikasis skaičius.';
    }

    for (const item of cart) {
        if (item.id === id) {
            const total = (item.unitPrice / 100 * item.amount).toFixed(2);
            const pricePerUnit = (item.unitPrice / 100).toFixed(2);
            return '-'.repeat(30) + '\nPrekės informacija\n' + '-'.repeat(30) + '\n' + 
                   'ID            | ' + item.id + '\n' + 
                   'Pavadinimas   | ' + item.name + '\n' + 
                   'Kiekis        | ' + item.amount + ' vnt\n' + 
                   'Vieneto kaina | ' + pricePerUnit + ' Eur\n' + 
                   'Viso mokėti   | ' + total + ' Eur\n' + '-'.repeat(30);
        }
    }
    return 'Prekė, su ID: ' + id + ' neegzistuoja.';
}