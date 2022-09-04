/* eslint-disable object-property-newline */
/*
 * @Descripttion: css 变量管理文件
 * @Author: 蔡远程
 * @Date: 2021-10-12 15:05:27
 * @LastEditTime: 2021-12-26 18:33:06
 * @LastEditors: 蔡远程
 */

export default [
    {
        name: 'Brand Color',
        children: [
            { name: '--color-primary-50', value: '#EFF4FF', },
            { name: '--color-primary-100', value: '#E2ECFF', },
            { name: '--color-primary-200', value: '#BFD4FF', },
            { name: '--color-primary-300', value: '#95B8FF', },
            { name: '--color-primary-400', value: '#5D94FF', },
            { name: '--color-primary', value: '#3573FE', },
            { name: '--color-primary-600', value: '#155CE9', },
            { name: '--color-primary-700', value: '#104FCC', },
            { name: '--color-primary-800', value: '#083EA9', },
            { name: '--color-primary-900', value: '#062E7E', }
        ],
    },
    {
        name: 'Secondary Color',
        children: [
            { name: '--color-secondary-50', value: '#FCE9E6', },
            { name: '--color-secondary-100', value: '#FFCDBA', },
            { name: '--color-secondary-200', value: '#FFAC8E', },
            { name: '--color-secondary-300', value: '#FF8E60', },
            { name: '--color-secondary-400', value: '#FE763C', },
            { name: '--color-secondary', value: '#FD5E15', },
            { name: '--color-secondary-600', value: '#CC4A10', },
            { name: '--color-secondary-700', value: '#B33E07', },
            { name: '--color-secondary-800', value: '#8C3106', },
            { name: '--color-secondary-900', value: '#662101', }
        ],
    },
    {
        name: 'Success Color',
        children: [
            { name: '--color-success-50', value: '#F0FDF4', },
            { name: '--color-success-100', value: '#DCFCE7', },
            { name: '--color-success-200', value: '#BBF7D0', },
            { name: '--color-success-300', value: '#86EFAC', },
            { name: '--color-success-400', value: '#4ADE80', },
            { name: '--color-success', value: '#22C55E', },
            { name: '--color-success-600', value: '#16A34A', },
            { name: '--color-success-700', value: '#15803D', },
            { name: '--color-success-800', value: '#166534', },
            { name: '--color-success-900', value: '#14532D', }
        ],
    },
    {
        name: 'Warning Color',
        children: [
            { name: '--color-warning-50', value: '#FEF7ED', },
            { name: '--color-warning-100', value: '#FEEDD5', },
            { name: '--color-warning-200', value: '#FCD7AA', },
            { name: '--color-warning-300', value: '#FBBA74', },
            { name: '--color-warning-400', value: '#FA923C', },
            { name: '--color-warning', value: '#F97316', },
            { name: '--color-warning-600', value: '#EA580C', },
            { name: '--color-warning-700', value: '#C2400C', },
            { name: '--color-warning-800', value: '#9A3412', },
            { name: '--color-warning-900', value: '#7C2D13', }
        ],
    },
    {
        name: 'Danger Color',
        children: [
            { name: '--color-danger-50', value: '#FEF2F2', },
            { name: '--color-danger-100', value: '#FDE2E2', },
            { name: '--color-danger-200', value: '#FCCACA', },
            { name: '--color-danger-300', value: '#FBA5A5', },
            { name: '--color-danger-400', value: '#F87171', },
            { name: '--color-danger', value: '#EF4444', },
            { name: '--color-danger-600', value: '#DC2626', },
            { name: '--color-danger-700', value: '#B91C1B', },
            { name: '--color-danger-800', value: '#991B1B', },
            { name: '--color-danger-900', value: '#7F1D1C', }
        ],
    },
    {
        name: 'Info Color',
        children: [
            { name: '--color-info-50', value: '#F9FAFB', },
            { name: '--color-info-100', value: '#F3F4F6', },
            { name: '--color-info-200', value: '#E5E7EB', },
            { name: '--color-info-300', value: '#D1D5DB', },
            { name: '--color-info-400', value: '#9CA3AF', },
            { name: '--color-info', value: '#6B7280', },
            { name: '--color-info-600', value: '#4B5563', },
            { name: '--color-info-700', value: '#374151', },
            { name: '--color-info-800', value: '#1F2837', },
            { name: '--color-info-900', value: '#121827', }
        ],
    },
    {
        name: 'Link Color',
        children: [
            { name: '--color-link-50', value: '#EFF6FF', },
            { name: '--color-link-100', value: '#DBEAFE', },
            { name: '--color-link-200', value: '#BFDBFE', },
            { name: '--color-link-300', value: '#93C5FD', },
            { name: '--color-link-400', value: '#60A5FA', },
            { name: '--color-link', value: '#3B82F6', },
            { name: '--color-link-600', value: '#2563EB', },
            { name: '--color-link-700', value: '#1D4ED8', },
            { name: '--color-link-800', value: '#1E40AF', },
            { name: '--color-link-900', value: '#1E3A8A', }
        ],
    },
    {
        name: 'Font Color',
        children: [
            { name: '--color-text-primary', value: '#1F2837', },
            { name: '--color-text-regular', value: '#374151', },
            { name: '--color-text-secondary', value: '#6B7280', },
            { name: '--color-text-placeholder', value: '#9CA3AF', }
        ],
    },
    {
        name: 'Border Color',
        children: [
            { name: '--border-color-base', value: '#D1D5DB', },
            { name: '--border-color-light', value: '#E5E7EB', },
            { name: '--border-color-lighter', value: '#F3F4F6', },
            { name: '--border-color-extra-light', value: '#F9FAFB', }
        ],
    },
    {
        name: 'Background Color',
        children: [
            { name: '--background-color-lighter', value: '#F9FAFB', },
            { name: '--background-color-base', value: '#F3F4F6', },
            { name: '--background-color-dark', value: '#E5E7EB', }
        ],
    },
    {
        name: 'Color',
        children: [
            { name: '--color-white', value: '#FFFFFF', },
            { name: '--color-black', value: '#000000', }
        ],
    },
    {
        name: 'BoxShadow Style',
        children: [
            { name: '--box-shadow-lighter', value: '0 1px 2px 0 rgba(0, 0, 0, 0.1)', },
            { name: '--box-shadow-base', value: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', },
            { name: '--box-shadow-medium', value: '0 4px 6px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04)', },
            { name: '--box-shadow-large', value: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)', },
            { name: '--box-shadow-dark', value: '0 25px 50px -12px rgba(0, 0, 0, 0.2)', },
            { name: '--box-shadow-light', value: ' 0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 10px 10px -5px rgba(0, 0, 0, 0.02)', }
        ],
    },
    {
        name: 'Font Size',
        children: [
            { name: '--font-size-extrem-large', value: '24px', },
            { name: '--font-size-extra-large', value: '20px', },
            { name: '--font-size-large', value: '18px', },
            { name: '--font-size-middle', value: '16px', },
            { name: '--font-size-medium', value: '14px', },
            { name: '--font-size-base', value: '13px', },
            { name: '--font-size-small', value: '12px', }
        ],
    },
    {
        name: 'Font Weight',
        children: [
            { name: '--font-weight-light', value: '300', },
            { name: '--font-weight-normal', value: '400', },
            { name: '--font-weight-medium', value: '500', },
            { name: '--font-weight-middle', value: '600', },
            { name: '--font-weight-bold', value: '700', },
            { name: '--font-weight-bolder', value: '800', },
            { name: '--font-weight-extra-bold', value: '900', }
        ],
    }
];
