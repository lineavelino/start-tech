import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Repositories from './Repositories';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/Repositories' component={Repositories} />
            </Switch>
        </BrowserRouter>
    )
}