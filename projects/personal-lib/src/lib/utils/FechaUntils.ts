import * as moment from 'moment';

export class FechaUtils {
    /**
     * Configuración de los formatos de fecha personalizados, configurado para iniciar
     * los días de la semana los lunes y manejar las fechas en formato 'DD/MM/YYYY'
     */
    public static CUSTOM_DATE_FORMATS = {
        parse: {
            dateInput: 'DD/MM/YYYY',
        },
        display: {
            dateInput: 'DD/MM/YYYY',
            monthYearLabel: 'MMMM YYYY',
            dateA11yLabel: 'LL',
            monthYearA11yLabel: 'MMMM YYYY',
        },
    };
    /**
     * Función que convierte una fecha de DD/MM/YYYY a formato ISO
     * @returns Date - La fecha en formato ISO 8601
     * @param dateStr - La fecha en formato 'DD/MM/YYYY'
     * @see this.range - Utiliza este formato de fecha para settear valores
     */
    public static convertToISO(dateStr: string): Date {
        const [day, month, year] = dateStr.split('/').map(Number);
        return new Date(year, month - 1, day);
    }

    /**
     * Función para personalizar las clases de las celdas del calendario
     * Muestra los números de semana y aplica estilos según el día de la semana
     */
    public static dateClass = (cellDate: string | number | Date | moment.Moment,
                               view: string) => {
        if (view === 'month') {
            const date = moment(cellDate);
            const day = date.day();
            let prefix = '';

            if (day === 1 || date.date() === 1) {
                const weekNumber = date.isoWeek();
                const month = date.month();

                let formattedWeekNumber;

                if (weekNumber === 1 && month === 11) {
                    formattedWeekNumber = '53';
                }
                else if ((weekNumber === 52 || weekNumber === 53) && month === 0) {
                    formattedWeekNumber = '01';
                } else {
                    formattedWeekNumber = weekNumber < 10 ? '0' + weekNumber : '' + weekNumber;
                }

                const uniqueClass = `week-${formattedWeekNumber}`;

                if (date.date() === 1) {
                    let dayClass = '';
                    switch (day) {
                        case 0:
                            dayClass = 'first-day-sunday';
                            break;
                        case 1:
                            dayClass = 'first-day-monday';
                            break;
                        case 2:
                            dayClass = 'first-day-tuesday';
                            break;
                        case 3:
                            dayClass = 'first-day-wednesday';
                            break;
                        case 4:
                            dayClass = 'first-day-thursday';
                            break;
                        case 5:
                            dayClass = 'first-day-friday';
                            break;
                        case 6:
                            dayClass = 'first-day-saturday';
                            break;
                    }
                    prefix += `show-iso-week ${uniqueClass} ${dayClass} `;
                } else {
                    prefix += `show-iso-week ${uniqueClass} `;
                }

                FechaUtils.setWeekNumberStyle(uniqueClass, formattedWeekNumber);
            }

            if (day === 6) return prefix + 'date-saturday';
            if (day === 0) return prefix + 'date-sunday';
            return prefix;
        }
        return '';
    };

    /**
     * Establece un estilo dinámicamente para mostrar el número de semana
     * @param className Nombre de la clase CSS para aplicar el estilo
     * @param weekNumber Número de semana a mostrar
     */
    private static setWeekNumberStyle(className: string, weekNumber: string): void {
        let styleSheet: CSSStyleSheet | null = null;

        for (let i = 0; i < document.styleSheets.length; i++) {
            if (document.styleSheets[i].title === 'week-numbers') {
                styleSheet = document.styleSheets[i] as CSSStyleSheet;
                break;
            }
        }

        if (!styleSheet) {
            const style = document.createElement('style');
            style.title = 'week-numbers';
            document.head.appendChild(style);
            styleSheet = style.sheet as CSSStyleSheet;
        }

        if (styleSheet.cssRules.length === 0) {
            const baseSelector = `.show-iso-week::before`;
            const baseRule = `{
                position: absolute;
                font-size: 10pt;
                color: green;
                top: 13px;
                text-align: center;
                left: -26px;
                width: 20px;
                z-index: 100;
            }`;

            try {
                styleSheet.insertRule(`${baseSelector}${baseRule}`, styleSheet.cssRules.length);
            } catch (e) {
                console.error('Error al insertar regla CSS base:', e);
            }
        }

        const selector = `.${className}::before`;
        const rule = `{ content: '${weekNumber}'; }`;

        try {
            styleSheet.insertRule(`${selector}${rule}`, styleSheet.cssRules.length);
        } catch (e) {
            console.error('Error al insertar regla CSS:', e);
        }
    }
}
