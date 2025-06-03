import './default.sass';

export function Footer() {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} - All rights reserved</p>
            <p>Made with ❤️ by Emanuel Douglas</p>
        </footer>
    );
}