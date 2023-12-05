import { lazy, useState, FC } from 'react';

// React Router
import { useRoutes } from 'react-router-dom';

// Lazy Loading
const Container = lazy(() => import('../Container/Container'));
const Button = lazy(() => import('../Pages/Button/Button'));
const Dropdown = lazy(() => import('../Pages/Dropdown/Dropdown'));


const MasterRoutes: FC = () => {
    const [Path] = useState('/');

    return useRoutes([
        {
            path: Path,
            element: <Container />,
            children: [
                { path: Path, element: <Button /> },
                { path: 'dropdown', element: <Dropdown /> },
            ]
        },
    ])
}

export default MasterRoutes;
