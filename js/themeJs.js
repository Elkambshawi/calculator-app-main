let themeOption = document.querySelector('.theme-option');
let btnThemeOption = document.querySelector('.theme-option span');
const root_theme = document.querySelector(':root');

themeOption.onclick = function () {
    if (btnThemeOption.classList.contains('one')) {
        btnThemeOption.classList.remove('one');
        btnThemeOption.classList.add('two');

        root_theme.style.setProperty('--main-background', 'hsl(0, 0%, 90%)'); 
        root_theme.style.setProperty('--toggle-background-keypad-backgroun', 'hsl(0, 5%, 81%)'); 
        root_theme.style.setProperty('--screen-background', 'hsl(0, 0%, 93%)'); 
        root_theme.style.setProperty('--darkblue-key-background', 'hsl(185, 42%, 37%)'); 
        root_theme.style.setProperty('--darkblue-key-shadow', 'hsl(185, 58%, 25%)'); 
        root_theme.style.setProperty('--red-key-background-toggle', 'hsl(25, 98%, 40%)'); 
        root_theme.style.setProperty('--dark-red-key-shadow', 'hsl(25, 99%, 27%)'); 
        root_theme.style.setProperty('--light-grayish-orange-key-background', 'hsl(45, 7%, 89%)'); 
        root_theme.style.setProperty('--grayish-orange-key-shadow', 'hsl(35, 11%, 61%)'); 
        root_theme.style.setProperty('--text-very-dark-grayish-blue', 'hsl(60, 10%, 19%)'); 
        root_theme.style.setProperty('--text-white', 'hsl(0, 0%, 100%)'); 

    } else if (btnThemeOption.classList.contains('two')) {
        btnThemeOption.classList.remove('two');
        btnThemeOption.classList.add('three');

        root_theme.style.setProperty('--main-background', 'hsl(268, 75%, 9%)'); 
        root_theme.style.setProperty('--toggle-background-keypad-backgroun', 'hsl(268, 71%, 12%)'); 
        root_theme.style.setProperty('--screen-background', 'hsl(281, 89%, 26%)'); 
        root_theme.style.setProperty('--darkblue-key-background', 'hsl(285, 91%, 52%)'); 
        root_theme.style.setProperty('--darkblue-key-shadow', 'hsl(176, 100%, 44%)'); 
        root_theme.style.setProperty('--red-key-background-toggle', 'hsl(177, 92%, 70%)'); 
        root_theme.style.setProperty('--dark-red-key-shadow', 'hsl(268, 47%, 21%)'); 
        root_theme.style.setProperty('--light-grayish-orange-key-background', 'hsl(290, 70%, 36%)'); 
        root_theme.style.setProperty('--grayish-orange-key-shadow', 'hsl(52, 100%, 62%)'); 
        root_theme.style.setProperty('--text-very-dark-grayish-blue', 'hsl(198, 20%, 13%)'); 
        root_theme.style.setProperty('--text-white', 'hsl(0, 0%, 100%)'); 

    } else if (btnThemeOption.classList.contains('three')) {
        btnThemeOption.classList.remove('three');
        btnThemeOption.classList.add('one');

        root_theme.style.setProperty('--main-background', 'hsl(222, 26%, 31%)'); 
        root_theme.style.setProperty('--toggle-background-keypad-backgroun', 'hsl(223, 31%, 20%)'); 
        root_theme.style.setProperty('--screen-background', 'hsl(224, 36%, 15%)'); 
        root_theme.style.setProperty('--darkblue-key-background', 'hsl(225, 21%, 49%)'); 
        root_theme.style.setProperty('--darkblue-key-shadow', 'hsl(224, 28%, 35%)'); 
        root_theme.style.setProperty('--red-key-background-toggle', 'hsl(6, 63%, 50%)'); 
        root_theme.style.setProperty('--dark-red-key-shadow', 'hsl(6, 70%, 34%)'); 
        root_theme.style.setProperty('--light-grayish-orange-key-background', 'hsl(30, 25%, 89%)'); 
        root_theme.style.setProperty('--grayish-orange-key-shadow', 'hsl(28, 16%, 65%)'); 
        root_theme.style.setProperty('--text-very-dark-grayish-blue', ' hsl(230, 17%, 14%)'); 
        root_theme.style.setProperty('--text-white', 'hsl(0, 0%, 100%)');  

    }
}