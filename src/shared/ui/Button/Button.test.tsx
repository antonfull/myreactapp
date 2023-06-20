import {render, screen} from '@testing-library/react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import Button, {ButtonTheme} from 'shared/ui/Button/Button';


describe('Button' , () => {
    test('button', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    test('button clear', () => {
        render(<Button theme={ButtonTheme.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});