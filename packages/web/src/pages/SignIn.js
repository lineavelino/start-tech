export default function SignIn() {
    return (
        <form action="/authenticate" method="POST">
            <fieldset>
                <label for="email">E-mail</label>
                <input type="email" name="email" id="email" inputmode="email" autocomplete="username"></input>
            </fieldset>
            <fieldset>
                <label for="password">Senha</label>
                <input type="password" name="password" id="password" autocomplete="current-password"></input>
            </fieldset>
            <button type="submit">Entrar</button>
        </form>
    )
}