import './Promotion.css';

export default function Promotion({ children }: { children: React.ReactNode }) {
    return (
        <section className="promotion">
            <h1 className="title-main mt20 mb20">
                {children}
            </h1>
        </section>
    );
}