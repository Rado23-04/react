import logo from '../../assets/leaf+1.png'
export function Header(){

    const title = "La maison jungle"
    return <div>
        <img src={logo} alt="" className='lmj-logo' />
         <h1 className="lmj-banner">{title.toUpperCase()}</h1>
    </div>
}
export function Description (){
    const text = "Ici achetez toutes les plantes dont vous avez toujours révé"
    return <div>
        <p className='lmj-title'>{text}</p>
    </div>
}
export default Header
