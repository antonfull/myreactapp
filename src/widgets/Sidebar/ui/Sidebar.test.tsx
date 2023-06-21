import {fireEvent, render, screen} from '@testing-library/react';
import Sidebar from './Sidebar';
import {renderWithTranslation} from "../../../shared/lib/test/TestWithTranslation/RenderWithTranslation";





describe('Sidebar' , () => {
    test('Sidebar', () => {
        renderWithTranslation(<Sidebar/>);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('Sidebar collapsed', () => {
        renderWithTranslation(<Sidebar/>);
        const toogleBtn = screen.getByTestId('button-toogle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toogleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});