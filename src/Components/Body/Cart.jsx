export function Cart(){
    const monstera = 8
    const lierre = 10
    const bouquet = 15
    return <div>
        <h2>Panier</h2>
        <ul>
            <li>{monstera} €</li>
            <li>{lierre} €</li>
            <li>{bouquet} €</li>
        </ul>

        <p>Total: {monstera+lierre+bouquet} € </p>
    </div>
}