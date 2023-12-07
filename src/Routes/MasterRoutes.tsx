import { lazy, useState, FC } from 'react';

// React Router
import { useRoutes } from 'react-router-dom';

// Lazy Loading
const Container = lazy(() => import('../Container/Container'));
const Button = lazy(() => import('../Pages/Button/Button'));
const Switch = lazy(() => import('../Pages/Switch/Switch'));
const Checkbox = lazy(() => import('../Pages/Checkbox/Checkbox'));
const Select = lazy(() => import('../Pages/Select/Select'));
const Grid = lazy(() => import('../Pages/Grid/Grid'));


const MasterRoutes: FC = () => {
    const [Path] = useState('/');

    return useRoutes([
        {
            path: Path,
            element: <Container />,
            children: [
                { path: Path, element: <Button /> },
                { path: 'switch', element: <Switch /> },
                { path: 'checkbox', element: <Checkbox /> },
                { path: 'select', element: <Select /> },
                { path: 'grid', element: <Grid /> },
            ]
        },
    ])
}

export default MasterRoutes;
