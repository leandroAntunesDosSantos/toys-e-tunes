import './Button.css'

export default function Button({children}: {children: React.ReactNode}) {
    return (
        <button className="btn-buy">{children}</button>
    );
}