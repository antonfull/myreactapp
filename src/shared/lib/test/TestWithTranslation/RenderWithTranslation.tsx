import React, {ReactNode} from 'react';
import { I18nextProvider } from 'react-i18next';
import {render} from '@testing-library/react';
import I18nTesting from 'shared/config/i18nTesting';

export function renderWithTranslation(component: ReactNode) {
    render(
        <I18nextProvider i18n={I18nTesting}>
            {component}
        </I18nextProvider>
    );
}