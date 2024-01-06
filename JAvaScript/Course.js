        const HTMLPassed = true;
        const CSSPassed = true;
        let message = '';
        if (HTMLPassed && CSSPassed) {
            message = 'You can start PHP course.ENjoy your time!';
        } else if (HTMLPassed ||CSSPassed) {
            message = 'YOU have to learn both of them for start PHP course';
        } else{
            message = 'You have to learn For start PHP course';
        }

        console.log(message);