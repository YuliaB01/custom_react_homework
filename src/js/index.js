const app = CustomReact.createElement(
    'div',
    { style: { backgroundColor: '#ff9000' }, className: 'contentWrapper' },
    [
        CustomReact.createElement('span', undefined, 'Hello world!'),
        CustomReact.createElement('br'),
        'This is just a text node',
        CustomReact.createElement('div', { textContent: 'Text content' })
    ]
);
CustomReact.render(app, document.getElementById('root'));