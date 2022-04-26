const btn = document.getElementById('btn');
        const par1 = document.getElementById('par1');

        function rand6() {
            return Math.round(Math.random() * 6);
        }

        const tab1 = [
            'Ja chcę powiedzieć jedną rzecz: ',
            'Trzeba powiedzieć jasno, ',
            'Jak powiedział wybitny krakowianin Stanisław Lem, ',
            'Proszę mnie dobrze zrozumieć: ',
            'Ja chciałem państwu przypomnieć, że ',
            'Niech państwo nie mają złudzeń: ',
            'Powiedzmy to wyraźnie: '
        ];

        const tab2 = [
            'przedstawiciele czerwonej hołoty ',
            'ci wszyscy (tfu!) geje ',
            'funkcjonariusze reżymowej telewizji ',
            'tak zwani ekolodzy ',
            'ci wszyscy (tfu!) demokraci ',
            'agenci bezpieki ',
            'feminazistki '
        ];

        const tab3 = ['zupełnie bezkarnie ',
            'całkowicie bezczelnie ',
            'o poglądach na lewo od komunizmu ',
            'celowo i świadomie ',
            'z premedytacją ',
            'od czasów Okrągłego Stołu ',
            'w ramach postępu '
        ];

        const tab4 = [
            'nawołują do podniesienia podatków, ',
            'próbują wyrzucić kierowców z miast, ',
            'próbują skłócić Polskę z Rosją, ',
            'głoszą brednie o globalnym ociepleniu, ',
            'zakazują posiadania broni, ',
            'nie dopuszczają prawicy o władzy, ',
            'uczą dzieci homoseksualizmu, '
        ];

        const tab5 = [
            'bo dzięki temu mogą kraść',
            'bo dostają za to pieniądze',
            'bo tak się uczy w państwowej szkole',
            'bo bez tego (tfu!) demokracja nie może istnieć',
            'bo głupich jest więcej niż mądrych',
            'bo chcą tworzyć raj na ziemi',
            'bo chcę niszczyć cywilizację białego człowieka'
        ];

        const tab6 = [
            ' przez kolejne kadencje.',
            ', o czym się nie mówi.',
            ' i właśnie dlatego Europa umiera.',
            ', ale przyjdą muzułmanie i zrobią porządek.',
            ' - tak samo zresztą jak za Hitlera.',
            ' - proszę zobaczyć, co się dzieje na Zachodzie, jeśli mi państwo nie wierzą.',
            ', co lat temu sto nikomu nie przyszłoby nawet do głowy.'
        ];

        function quote() {
            par1.innerHTML = tab1[rand6()] + tab2[rand6()] + tab3[rand6()] + tab4[rand6()] + tab5[rand6()] + tab6[rand6()];
        }

        btn.addEventListener('click', quote);
