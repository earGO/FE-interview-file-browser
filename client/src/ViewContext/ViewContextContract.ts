import React from 'react';

export interface ViewContextContract {
    handleDeleteFileSizeFilter: () => void;
    currentFileSize: number;
    handleFileSizeFilterInputChange: (event: React.FormEvent<HTMLInputElement>) => void;
}
