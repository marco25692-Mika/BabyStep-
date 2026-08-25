// ==========================================
// 0. SPRACHEN & ÜBERSETZUNGEN (WÖRTERBUCH)
// ==========================================
let currentLang = localStorage.getItem('request_lang') || 'de';

function getLocale() {
    const locs = { de: 'de-DE', en: 'en-US', es: 'es-ES', it: 'it-IT', fr: 'fr-FR' };
    return locs[currentLang] || 'de-DE';
}

const translations = {
    de: {
        login_subtitle: "Dein digitales Familientagebuch", login_welcome: "Willkommen! Wer bist du?", login_name_ph: "Dein Vorname (optional)", login_role_ph: "Deine Rolle (z.B. Oma)",
        role_mom: "Mama", role_dad: "Papa", role_grandma: "Oma", role_grandpa: "Opa", role_aunt: "Tante", role_uncle: "Onkel", role_godmother: "Patentante", role_godfather: "Patenonkel", login_btn: "Tagebuch beitreten",
        greet_morning: "Guten Morgen", greet_day: "Guten Tag", greet_evening: "Guten Abend", 
        trial_banner: "Testversion: Noch {d} Tag(e) / {h} Std. verbleibend.", trial_unlock: "Jetzt freischalten?",
        menu_title: "Menü", menu_home: "Startbild", menu_diary: "Tagebuch / Posts", menu_gallery: "Galerie", menu_milestones: "Meilensteine", menu_growth: "Wachstum",
        menu_food: "Nahrung", menu_sleep: "Schlaf", menu_cycle: "Zyklus", menu_shopping: "Einkaufsliste", menu_pregnancy: "Schwanger", menu_wishlist: "Wunschliste", menu_games: "Spielecke", menu_stats: "Statistik",
        btn_add_kid: "+ Kind", title_diary: "Tagebuch & Posts 📖", btn_new_post: "Neuen Beitrag erstellen", btn_collapse: "📅 Einklappen",
        day_mo: "Mo", day_tu: "Di", day_we: "Mi", day_th: "Do", day_fr: "Fr", day_sa: "Sa", day_su: "So",
        title_milestones: "Meilensteine 🏆", desc_milestones: "Hier findest du alle besonderen Momente auf einen Blick.",
        title_add_kid: "Kind anlegen", label_name: "Name", ph_name: "Name des Kindes", label_gender: "Geschlecht", opt_boy: "Junge", opt_girl: "Mädchen",
        label_date_type: "Art des Datums", opt_et: "Entbindungstermin (ET)", opt_bday: "Tatsächlicher Geburtstag", label_calc_et: "Errechneter Geburtstermin (ET)",
        label_size_birth: "Größe bei Geburt (optional in cm)", label_weight_birth: "Gewicht bei Geburt (optional in kg)", label_avatar: "Profilbild / Avatar",
        btn_save: "Speichern", btn_delete_profile: "Profil löschen", btn_cancel: "Abbrechen",
        title_gallery: "Galerie 🖼️", title_growth: "Entwicklung 📈", label_select_kid: "Kind auswählen", label_measure_date: "Datum der Messung",
        label_size: "Größe (cm)", label_weight: "Gewicht (kg)", label_shoe: "Schuhgröße (EU, optional)", btn_save_measure: "Messung eintragen",
        tab_size: "Größe", tab_weight: "Gewicht", title_measure_table: "Messwerte-Tabelle",
        title_food: "Nahrung 🍼", title_feed_entry: "Füttern eintragen", label_feed_type: "Art der Mahlzeit", opt_breast: "Stillen (Brust)", opt_bottle: "Flasche",
        label_side: "Welche Seite?", opt_left: "Linke Brust", opt_right: "Rechte Brust", opt_both: "Beide Seiten", label_duration: "Dauer (Minuten)", label_amount: "Menge (ml)",
        label_time: "Uhrzeit", btn_save_feed: "Mahlzeit speichern", title_feed_history: "Nahrungs-Historie",
        title_sleep: "Schlaftracker 😴", title_sleep_entry: "Schlaf eintragen", label_sleep_start: "Eingeschlafen (Datum & Uhrzeit)", label_sleep_end: "Aufgewacht (Optional für Tracker)",
        btn_save_sleep: "Schlaf eintragen", title_sounds: "Einschlaf-Sounds (Offline)", sound_noise: "Rauschen", sound_hairdryer: "Föhn", sound_heartbeat: "Herz", sound_rain: "Regen", sound_waves: "Meer",
        title_sleep_chart: "Tägliche Schlaf-Übersicht", title_sleep_history: "Schlaf-Historie",
        title_cycle: "Zyklus-Tracker 🌸", label_period_in: "Periode in", cycle_calc: "Zyklusdaten werden berechnet...", btn_enter_period: "Periode eingeben",
        title_cycle_history: "Zyklusverlauf", label_last_months: "Letzte Monate",
        title_pregnancy: "Schwangerschaft 🤰", title_status: "Status", opt_fruits: "Obst & Gemüse", opt_animals: "Tiere", title_comparison: "Größenvergleich", desc_select_kid: "Bitte wähle unten ein Kind aus.",
        label_exam_date: "Datum der Untersuchung", label_preg_size: "Größe des Babys (opt.)", label_preg_weight: "Gewicht des Babys (opt.)", label_notes: "Notizen", btn_save_exam: "Untersuchung eintragen",
        title_chart: "Verlaufskurve", title_history: "Historie",
        title_wishlist: "Wunschliste 🎁", label_wish: "Wunsch / Geschenk", label_occasion: "Anlass (optional)", label_link: "Link zum Produkt (opt.)", btn_add_wish: "Wunsch hinzufügen", title_wishes: "Gesammelte Wünsche",
        title_shopping: "Einkaufsliste 🛒", desc_shopping: "Notiere hier Windeln, Brei oder was sonst besorgt werden muss.", ph_shopping: "z.B. Windeln Gr. 3", btn_add_list: "Zur Liste hinzufügen", title_to_buy: "Noch zu besorgen",
        title_profile: "Profil", title_your_data: "Deine Daten", label_your_name: "Dein Vorname", label_your_role: "Deine Rolle(n) in der Familie",
        title_preg_share: "Schwangerschafts-Ansicht", label_share_family: "Für Familie & Freunde freigeben", title_overview: "Übersicht", menu_manage_family: "Familie & Zugriff verwalten",
        menu_logout: "Abmelden", menu_settings: "Einstellungen & Speicher", menu_contact: "Kontakt & Support", menu_invite: "Weitersagen & Einladen", btn_back: "‹ Zurück",
        title_pending: "Ausstehende Anfragen", title_active_members: "Aktive Mitglieder", btn_send_email: "Via E-Mail Programm senden",
        lang_select: "Sprache / Language", label_push: "Push-Benachrichtigungen", label_unit_size: "Größe", label_unit_weight: "Gewicht", title_danger: "Speicher & Datenverwaltung",
        btn_del_images: "Nur Bilder löschen", btn_del_all: "App komplett zurücksetzen", btn_invite_now: "Personen jetzt einladen",
        title_memory: "Foto-Memory", btn_new_game: "Neues Spiel", title_paywall: "Zeit abgelaufen", desc_paywall: "Deine kostenlose Testphase ist leider vorbei.",
        label_is_milestone: "Das ist ein Meilenstein!", btn_edit: "Bearbeiten", btn_delete: "Löschen", btn_close: "Schließen",
        menu_terms: "Nutzungsbedingungen", menu_privacy: "Datenschutzrichtlinie", menu_disclaimer: "Haftungsausschluss",
        disclaimer_text: "Haftungsausschluss: Alle Berechnungen, Wachstums- und Schlaftracker in BabySteps dienen ausschließlich Informationszwecken und ersetzen keinen ärztlichen Rat.",
        btn_confirm: "Bestätigen", label_subject: "Thema", label_message: "Nachricht", ph_subject: "Worum geht es?", ph_message: "Schreibe hier dein Anliegen...",
        terms_h1: "1. Geltungsbereich & Akzeptanz", terms_p1: "Willkommen bei BabySteps! Durch die Nutzung dieser App erklärst du dich mit diesen Nutzungsbedingungen einverstanden. Die App dient als rein privates, digitales Familientagebuch.",
        terms_h2: "2. Offline-First & Datenverlust", terms_p2: "BabySteps speichert alle eingegebenen Daten (Texte, Bilder, Messwerte) ausschließlich lokal auf deinem jeweiligen Gerät. Es gibt keine Cloud-Anbindung. Wenn du die App deinstallierst oder den Browser-Cache löschst, gehen alle deine Daten unwiderruflich verloren.",
        terms_h3: "3. Kein medizinischer Rat", terms_p3: "Sämtliche Funktionen der App dienen ausschließlich Informationszwecken. Sie ersetzen in keinem Fall die professionelle Beratung oder Behandlung durch einen Arzt.",
        terms_h4: "4. Premium-Version", terms_p4: "Sofern die App über eine kostenpflichtige Freischaltung verfügt, handelt es sich um eine Einmalzahlung für die dauerhafte Nutzung auf dem jeweiligen Gerät. Es ist kein Abonnement.",
        priv_h1: "1. Deine Daten gehören dir", priv_p1: "Wir nehmen den Schutz deiner Daten ernst. Da BabySteps eine 'Offline-First'-Anwendung ist, werden keinerlei Daten an uns oder Dritte übertragen.",
        priv_h2: "2. Lokale Speicherung", priv_p2: "Alle Informationen verbleiben physisch auf dem Speicher deines Endgeräts. Wir haben keinen Zugriff auf diese Daten.",
        priv_h3: "3. Analytik & Tracking", priv_p3: "Wir verzichten komplett auf Tracking-Tools und Werbe-Cookies. Dein Verhalten wird nicht überwacht.",
        priv_h4: "4. Datenlöschung", priv_p4: "Du hast die volle Kontrolle. Wenn du deine Daten löschen möchtest, kannst du die App in den Einstellungen komplett zurücksetzen."
    },
    en: {
        login_subtitle: "Your digital family diary", login_welcome: "Welcome! Who are you?", login_name_ph: "Your first name (optional)", login_role_ph: "Your role (e.g. Grandma)",
        role_mom: "Mom", role_dad: "Dad", role_grandma: "Grandma", role_grandpa: "Grandpa", role_aunt: "Aunt", role_uncle: "Uncle", role_godmother: "Godmother", role_godfather: "Godfather", login_btn: "Join diary",
        greet_morning: "Good morning", greet_day: "Good afternoon", greet_evening: "Good evening", 
        trial_banner: "Trial: {d} day(s) / {h} hr(s) remaining.", trial_unlock: "Unlock now?",
        menu_title: "Menu", menu_home: "Home", menu_diary: "Diary / Posts", menu_gallery: "Gallery", menu_milestones: "Milestones", menu_growth: "Growth",
        menu_food: "Feeding", menu_sleep: "Sleep", menu_cycle: "Cycle", menu_shopping: "Shopping List", menu_pregnancy: "Pregnancy", menu_wishlist: "Wishlist", menu_games: "Games", menu_stats: "Statistics",
        btn_add_kid: "+ Child", title_diary: "Diary & Posts 📖", btn_new_post: "Create new post", btn_collapse: "📅 Collapse",
        day_mo: "Mo", day_tu: "Tu", day_we: "We", day_th: "Th", day_fr: "Fr", day_sa: "Sa", day_su: "Su",
        title_milestones: "Milestones 🏆", desc_milestones: "Find all special moments at a glance.",
        title_add_kid: "Add Child", label_name: "Name", ph_name: "Child's name", label_gender: "Gender", opt_boy: "Boy", opt_girl: "Girl",
        label_date_type: "Date Type", opt_et: "Due Date (EDD)", opt_bday: "Actual Birthday", label_calc_et: "Estimated Due Date (EDD)",
        label_size_birth: "Birth Length (optional in cm)", label_weight_birth: "Birth Weight (optional in kg)", label_avatar: "Profile Picture / Avatar",
        btn_save: "Save", btn_delete_profile: "Delete Profile", btn_cancel: "Cancel",
        title_gallery: "Gallery 🖼️", title_growth: "Growth 📈", label_select_kid: "Select Child", label_measure_date: "Date of Measurement",
        label_size: "Length (cm)", label_weight: "Weight (kg)", label_shoe: "Shoe Size (EU, optional)", btn_save_measure: "Add Measurement",
        tab_size: "Length", tab_weight: "Weight", title_measure_table: "Measurement Table",
        title_food: "Feeding 🍼", title_feed_entry: "Add Feeding", label_feed_type: "Type of Meal", opt_breast: "Breastfeeding", opt_bottle: "Bottle",
        label_side: "Which side?", opt_left: "Left Breast", opt_right: "Right Breast", opt_both: "Both Sides", label_duration: "Duration (Minutes)", label_amount: "Amount (ml)",
        label_time: "Time", btn_save_feed: "Save Meal", title_feed_history: "Feeding History",
        title_sleep: "Sleep Tracker 😴", title_sleep_entry: "Add Sleep", label_sleep_start: "Fell asleep (Date & Time)", label_sleep_end: "Woke up (Optional for Tracker)",
        btn_save_sleep: "Save Sleep", title_sounds: "Sleep Sounds (Offline)", sound_noise: "Noise", sound_hairdryer: "Hairdryer", sound_heartbeat: "Heart", sound_rain: "Rain", sound_waves: "Ocean",
        title_sleep_chart: "Daily Sleep Overview", title_sleep_history: "Sleep History",
        title_cycle: "Cycle Tracker 🌸", label_period_in: "Period in", cycle_calc: "Calculating cycle data...", btn_enter_period: "Log Period",
        title_cycle_history: "Cycle History", label_last_months: "Last Months",
        title_pregnancy: "Pregnancy 🤰", title_status: "Status", opt_fruits: "Fruits & Veggies", opt_animals: "Animals", title_comparison: "Size Comparison", desc_select_kid: "Please select a child below.",
        label_exam_date: "Date of Checkup", label_preg_size: "Baby's Size (opt.)", label_preg_weight: "Baby's Weight (opt.)", label_notes: "Notes", btn_save_exam: "Add Checkup",
        title_chart: "Growth Chart", title_history: "History",
        title_wishlist: "Wishlist 🎁", label_wish: "Wish / Gift", label_occasion: "Occasion (optional)", label_link: "Link product (opt.)", btn_add_wish: "Add Wish", title_wishes: "Collected Wishes",
        title_shopping: "Shopping List 🛒", desc_shopping: "Note down diapers, baby food, or whatever needs to be bought.", ph_shopping: "e.g., Diapers Size 3", btn_add_list: "Add to List", title_to_buy: "To Buy",
        title_profile: "Profile", title_your_data: "Your Data", label_your_name: "Your First Name", label_your_role: "Your Role(s) in the Family",
        title_preg_share: "Pregnancy View", label_share_family: "Share with Family & Friends", title_overview: "Overview", menu_manage_family: "Manage Family & Access",
        menu_logout: "Logout", menu_settings: "Settings & Storage", menu_contact: "Contact & Support", menu_invite: "Spread the Word & Invite", btn_back: "‹ Back",
        title_pending: "Pending Requests", title_active_members: "Active Members", btn_send_email: "Send via Email App",
        lang_select: "Sprache / Language", label_push: "Push Notifications", label_unit_size: "Size Unit", label_unit_weight: "Weight Unit", title_danger: "Storage & Data Management",
        btn_del_images: "Delete Images Only", btn_del_all: "Reset App Completely", btn_invite_now: "Invite People Now",
        title_memory: "Photo Memory", btn_new_game: "New Game", title_paywall: "Time's Up", desc_paywall: "Your free trial has unfortunately ended.",
        label_is_milestone: "This is a milestone!", btn_edit: "Edit", btn_delete: "Delete", btn_close: "Close",
        menu_terms: "Terms of Use", menu_privacy: "Privacy Policy", menu_disclaimer: "Disclaimer",
        disclaimer_text: "Disclaimer: All calculations and trackers in BabySteps are for informational purposes only and do not replace medical advice.",
        btn_confirm: "Confirm", label_subject: "Subject", label_message: "Message", ph_subject: "What is it about?", ph_message: "Write your request here...",
        terms_h1: "1. Scope & Acceptance", terms_p1: "Welcome to BabySteps! By using this app, you agree to these terms. The app is a purely private, digital family diary.",
        terms_h2: "2. Offline-First & Data Loss", terms_p2: "BabySteps stores all data exclusively locally on your device. There is no cloud connection. Uninstalling the app or clearing the cache will delete all data permanently.",
        terms_h3: "3. No Medical Advice", terms_p3: "All features are for informational purposes only. They do not replace professional medical advice or treatment.",
        terms_h4: "4. Premium Version", terms_p4: "If unlocked via a fee, it is a one-time payment for lifetime use on the device. It is not a subscription.",
        priv_h1: "1. Your Data is Yours", priv_p1: "We take privacy seriously. As an 'Offline-First' app, no personal data is transmitted to us or third parties.",
        priv_h2: "2. Local Storage", priv_p2: "All information remains physically on your device. We have no access to this data.",
        priv_h3: "3. Analytics & Tracking", priv_p3: "We do not use tracking tools or advertising cookies. Your behavior is not monitored.",
        priv_h4: "4. Data Deletion", priv_p4: "You have full control. You can permanently delete all data by resetting the app in the settings."
    },
    es: {
        login_subtitle: "Tu diario familiar digital", login_welcome: "¡Bienvenido/a! ¿Quién eres?", login_name_ph: "Tu nombre (opcional)", login_role_ph: "Tu rol (ej. Abuela)",
        role_mom: "Mamá", role_dad: "Papá", role_grandma: "Abuela", role_grandpa: "Abuelo", role_aunt: "Tía", role_uncle: "Tío", role_godmother: "Madrina", role_godfather: "Padrino", login_btn: "Unirse al diario",
        greet_morning: "Buenos días", greet_day: "Buenas tardes", greet_evening: "Buenas noches", 
        trial_banner: "Prueba: {d} día(s) / {h} h restantes.", trial_unlock: "¿Desbloquear ahora?",
        menu_title: "Menú", menu_home: "Inicio", menu_diary: "Diario / Posts", menu_gallery: "Galería", menu_milestones: "Hitos", menu_growth: "Crecimiento",
        menu_food: "Alimentación", menu_sleep: "Sueño", menu_cycle: "Ciclo", menu_shopping: "Compras", menu_pregnancy: "Embarazo", menu_wishlist: "Deseos", menu_games: "Juegos", menu_stats: "Estadísticas",
        btn_add_kid: "+ Niño", title_diary: "Diario y Posts 📖", btn_new_post: "Crear publicación", btn_collapse: "📅 Ocultar",
        day_mo: "Lu", day_tu: "Ma", day_we: "Mi", day_th: "Ju", day_fr: "Vi", day_sa: "Sá", day_su: "Do",
        title_milestones: "Hitos 🏆", desc_milestones: "Encuentra todos los momentos especiales de un vistazo.",
        title_add_kid: "Añadir niño", label_name: "Nombre", ph_name: "Nombre del niño", label_gender: "Género", opt_boy: "Niño", opt_girl: "Niña",
        label_date_type: "Tipo de fecha", opt_et: "Fecha probable (FPP)", opt_bday: "Cumpleaños real", label_calc_et: "Fecha probable de parto (FPP)",
        label_size_birth: "Altura al nacer (opcional cm)", label_weight_birth: "Peso al nacer (opcional kg)", label_avatar: "Foto de perfil / Avatar",
        btn_save: "Guardar", btn_delete_profile: "Eliminar Perfil", btn_cancel: "Cancelar",
        title_gallery: "Galería 🖼️", title_growth: "Crecimiento 📈", label_select_kid: "Seleccionar niño", label_measure_date: "Fecha de medición",
        label_size: "Altura (cm)", label_weight: "Peso (kg)", label_shoe: "Talla de zapatos (EU, opc.)", btn_save_measure: "Añadir medición",
        tab_size: "Altura", tab_weight: "Peso", title_measure_table: "Tabla de medidas",
        title_food: "Alimentación 🍼", title_feed_entry: "Añadir comida", label_feed_type: "Tipo de comida", opt_breast: "Lactancia", opt_bottle: "Biberón",
        label_side: "¿Qué lado?", opt_left: "Pecho izquierdo", opt_right: "Pecho derecho", opt_both: "Ambos lados", label_duration: "Duración (Minutos)", label_amount: "Cantidad (ml)",
        label_time: "Hora", btn_save_feed: "Guardar comida", title_feed_history: "Historial de alimentación",
        title_sleep: "Rastreador de sueño 😴", title_sleep_entry: "Añadir sueño", label_sleep_start: "Se durmió (Fecha y Hora)", label_sleep_end: "Se despertó (Opcional)",
        btn_save_sleep: "Guardar sueño", title_sounds: "Sonidos para dormir (Offline)", sound_noise: "Ruido", sound_hairdryer: "Secador", sound_heartbeat: "Corazón", sound_rain: "Lluvia", sound_waves: "Océano",
        title_sleep_chart: "Resumen diario de sueño", title_sleep_history: "Historial de sueño",
        title_cycle: "Rastreador de ciclo 🌸", label_period_in: "Período en", cycle_calc: "Calculando datos del ciclo...", btn_enter_period: "Registrar período",
        title_cycle_history: "Historial del ciclo", label_last_months: "Últimos meses",
        title_pregnancy: "Embarazo 🤰", title_status: "Estado", opt_fruits: "Frutas y Verduras", opt_animals: "Animales", title_comparison: "Comparación de tamaño", desc_select_kid: "Por favor selecciona un niño abajo.",
        label_exam_date: "Fecha de revisión", label_preg_size: "Tamaño del bebé (opc.)", label_preg_weight: "Peso del bebé (opc.)", label_notes: "Notas", btn_save_exam: "Añadir revisión",
        title_chart: "Curva de crecimiento", title_history: "Historial",
        title_wishlist: "Lista de deseos 🎁", label_wish: "Deseo / Regalo", label_occasion: "Ocasión (opcional)", label_link: "Enlace del producto (opc.)", btn_add_wish: "Añadir deseo", title_wishes: "Deseos guardados",
        title_shopping: "Lista de compras 🛒", desc_shopping: "Anota pañales, comida o lo que necesites comprar.", ph_shopping: "ej. Pañales Talla 3", btn_add_list: "Añadir a la lista", title_to_buy: "Por comprar",
        title_profile: "Perfil", title_your_data: "Tus datos", label_your_name: "Tu nombre", label_your_role: "Tu rol en la familia",
        title_preg_share: "Vista de embarazo", label_share_family: "Compartir con familia", title_overview: "Resumen", menu_manage_family: "Gestionar Familia y Acceso",
        menu_logout: "Cerrar sesión", menu_settings: "Ajustes y Memoria", menu_contact: "Contacto y Soporte", menu_invite: "Invitar amigos", btn_back: "‹ Volver",
        title_pending: "Solicitudes pendientes", title_active_members: "Miembros activos", btn_send_email: "Enviar por Email",
        lang_select: "Idioma / Language", label_push: "Notificaciones Push", label_unit_size: "Unidad Altura", label_unit_weight: "Unidad Peso", title_danger: "Gestión de Datos",
        btn_del_images: "Eliminar solo imágenes", btn_del_all: "Restablecer App por completo", btn_invite_now: "Invitar personas ahora",
        title_memory: "Foto Memory", btn_new_game: "Nuevo Juego", title_paywall: "Tiempo agotado", desc_paywall: "Tu prueba gratuita ha terminado.",
        label_is_milestone: "¡Esto es un hito!", btn_edit: "Editar", btn_delete: "Eliminar", btn_close: "Cerrar",
        menu_terms: "Términos de Uso", menu_privacy: "Política de Privacidad", menu_disclaimer: "Aviso legal",
        disclaimer_text: "Aviso legal: Todos los cálculos y rastreadores son solo para fines informativos.",
        btn_confirm: "Confirmar", label_subject: "Asunto", label_message: "Mensaje", ph_subject: "¿De qué se trata?", ph_message: "Escribe tu solicitud aquí...",
        terms_h1: "1. Alcance y Aceptación", terms_p1: "¡Bienvenido a BabySteps! Al usar esta app, aceptas estos términos. La app es un diario familiar puramente privado.",
        terms_h2: "2. Offline-First y Pérdida de Datos", terms_p2: "BabySteps almacena todos los datos localmente en tu dispositivo. No hay conexión a la nube. Desinstalar la app o borrar el caché eliminará todo permanentemente.",
        terms_h3: "3. Sin Consejo Médico", terms_p3: "Todas las funciones son solo informativas y no reemplazan el consejo o tratamiento médico profesional.",
        terms_h4: "4. Versión Premium", terms_p4: "Si se desbloquea mediante pago, es un pago único de por vida en el dispositivo. No es una suscripción.",
        priv_h1: "1. Tus Datos son Tuyos", priv_p1: "Tomamos la privacidad en serio. Al ser una app 'Offline-First', no se transmiten datos a nosotros ni a terceros.",
        priv_h2: "2. Almacenamiento Local", priv_p2: "Toda la información permanece físicamente en tu dispositivo. No tenemos acceso a estos datos.",
        priv_h3: "3. Análisis y Rastreo", priv_p3: "No utilizamos herramientas de rastreo ni cookies publicitarias. Tu comportamiento no es monitoreado.",
        priv_h4: "4. Borrado de Datos", priv_p4: "Tienes el control total. Puedes borrar todo permanentemente restableciendo la app en los ajustes."
    },
    it: {
        login_subtitle: "Il tuo diario familiare digitale", login_welcome: "Benvenuto/a! Chi sei?", login_name_ph: "Il tuo nome (opzionale)", login_role_ph: "Il tuo ruolo (es. Nonna)",
        role_mom: "Mamma", role_dad: "Papà", role_grandma: "Nonna", role_grandpa: "Nonno", role_aunt: "Zia", role_uncle: "Zio", role_godmother: "Madrina", role_godfather: "Padrino", login_btn: "Entra nel diario",
        greet_morning: "Buongiorno", greet_day: "Buon pomeriggio", greet_evening: "Buonasera", 
        trial_banner: "Prova: {d} giorno/i / {h} ore rimanenti.", trial_unlock: "Sblocca ora?",
        menu_title: "Menu", menu_home: "Home", menu_diary: "Diario / Post", menu_gallery: "Galleria", menu_milestones: "Traguardi", menu_growth: "Crescita",
        menu_food: "Alimentazione", menu_sleep: "Sonno", menu_cycle: "Ciclo", menu_shopping: "Spesa", menu_pregnancy: "Gravidanza", menu_wishlist: "Desideri", menu_games: "Giochi", menu_stats: "Statistiche",
        btn_add_kid: "+ Bimbo", title_diary: "Diario & Post 📖", btn_new_post: "Crea nuovo post", btn_collapse: "📅 Riduci",
        day_mo: "Lu", day_tu: "Ma", day_we: "Me", day_th: "Gi", day_fr: "Ve", day_sa: "Sa", day_su: "Do",
        title_milestones: "Traguardi 🏆", desc_milestones: "Trova tutti i momenti speciali a colpo d'occhio.",
        title_add_kid: "Aggiungi bimbo", label_name: "Nome", ph_name: "Nome del bambino", label_gender: "Genere", opt_boy: "Maschio", opt_girl: "Femmina",
        label_date_type: "Tipo di data", opt_et: "Data Presunta (DPP)", opt_bday: "Compleanno reale", label_calc_et: "Data presunta del parto",
        label_size_birth: "Altezza alla nascita (opz. cm)", label_weight_birth: "Peso alla nascita (opz. kg)", label_avatar: "Foto Profilo / Avatar",
        btn_save: "Salva", btn_delete_profile: "Elimina Profilo", btn_cancel: "Annulla",
        title_gallery: "Galleria 🖼️", title_growth: "Crescita 📈", label_select_kid: "Seleziona bambino", label_measure_date: "Data misurazione",
        label_size: "Altezza (cm)", label_weight: "Peso (kg)", label_shoe: "Misura scarpe (EU, opz.)", btn_save_measure: "Aggiungi misura",
        tab_size: "Altezza", tab_weight: "Peso", title_measure_table: "Tabella Misure",
        title_food: "Alimentazione 🍼", title_feed_entry: "Aggiungi pasto", label_feed_type: "Tipo di pasto", opt_breast: "Allattamento", opt_bottle: "Biberon",
        label_side: "Quale lato?", opt_left: "Seno sinistro", opt_right: "Seno destro", opt_both: "Entrambi", label_duration: "Durata (Minuti)", label_amount: "Quantità (ml)",
        label_time: "Ora", btn_save_feed: "Salva pasto", title_feed_history: "Cronologia Alimentazione",
        title_sleep: "Tracker del Sonno 😴", title_sleep_entry: "Aggiungi sonno", label_sleep_start: "Addormentato (Data & Ora)", label_sleep_end: "Svegliato (Opzionale)",
        btn_save_sleep: "Salva sonno", title_sounds: "Suoni per dormire (Offline)", sound_noise: "Rumore", sound_hairdryer: "Phon", sound_heartbeat: "Cuore", sound_rain: "Pioggia", sound_waves: "Oceano",
        title_sleep_chart: "Panoramica Sonno", title_sleep_history: "Cronologia Sonno",
        title_cycle: "Tracker Ciclo 🌸", label_period_in: "Mestruazioni in", cycle_calc: "Calcolo dati del ciclo...", btn_enter_period: "Registra ciclo",
        title_cycle_history: "Cronologia ciclo", label_last_months: "Ultimi mesi",
        title_pregnancy: "Gravidanza 🤰", title_status: "Stato", opt_fruits: "Frutta e Verdura", opt_animals: "Animali", title_comparison: "Confronto dimensioni", desc_select_kid: "Seleziona un bambino qui sotto.",
        label_exam_date: "Data visita", label_preg_size: "Dimensioni feto (opz.)", label_preg_weight: "Peso feto (opz.)", label_notes: "Note", btn_save_exam: "Salva visita",
        title_chart: "Curva di crescita", title_history: "Cronologia",
        title_wishlist: "Lista Desideri 🎁", label_wish: "Desiderio / Regalo", label_occasion: "Occasione (opzionale)", label_link: "Link prodotto (opz.)", btn_add_wish: "Aggiungi desiderio", title_wishes: "Desideri salvati",
        title_shopping: "Lista della spesa 🛒", desc_shopping: "Annota pannolini, pappe o altro da comprare.", ph_shopping: "es. Pannolini Misura 3", btn_add_list: "Aggiungi alla lista", title_to_buy: "Da comprare",
        title_profile: "Profilo", title_your_data: "I tuoi dati", label_your_name: "Il tuo nome", label_your_role: "Il tuo ruolo nella famiglia",
        title_preg_share: "Vista Gravidanza", label_share_family: "Condividi con famiglia", title_overview: "Panoramica", menu_manage_family: "Gestisci Famiglia e Accesso",
        menu_logout: "Esci", menu_settings: "Impostazioni & Memoria", menu_contact: "Contatto e Supporto", menu_invite: "Invita amici", btn_back: "‹ Indietro",
        title_pending: "Richieste in sospeso", title_active_members: "Membri attivi", btn_send_email: "Invia tramite Email",
        lang_select: "Lingua / Language", label_push: "Notifiche Push", label_unit_size: "Unità Altezza", label_unit_weight: "Unità Peso", title_danger: "Gestione Dati",
        btn_del_images: "Elimina solo immagini", btn_del_all: "Ripristina App", btn_invite_now: "Invita persone",
        title_memory: "Foto Memory", btn_new_game: "Nuova Partita", title_paywall: "Tempo scaduto", desc_paywall: "La prova gratuita è terminata.",
        label_is_milestone: "Questo è un traguardo!", btn_edit: "Modifica", btn_delete: "Elimina", btn_close: "Chiudi",
        menu_terms: "Termini di utilizzo", menu_privacy: "Informativa sulla privacy", menu_disclaimer: "Esclusione di responsabilità",
        disclaimer_text: "Esclusione di responsabilità: Tutti i calcoli e tracker hanno solo scopo informativo.",
        btn_confirm: "Conferma", label_subject: "Oggetto", label_message: "Messaggio", ph_subject: "Di cosa si tratta?", ph_message: "Scrivi qui la tua richiesta...",
        terms_h1: "1. Ambito e Accettazione", terms_p1: "Benvenuto in BabySteps! Usando questa app, accetti questi termini. L'app è un diario familiare puramente privato.",
        terms_h2: "2. Offline-First e Perdita Dati", terms_p2: "BabySteps salva tutti i dati localmente sul tuo dispositivo. Non c'è cloud. Disinstallare l'app o cancellare la cache eliminerà tutto permanentemente.",
        terms_h3: "3. Nessun Consiglio Medico", terms_p3: "Tutte le funzioni sono a scopo informativo e non sostituiscono il parere o trattamento medico professionale.",
        terms_h4: "4. Versione Premium", terms_p4: "Se sbloccata a pagamento, è un pagamento unico per l'uso sul dispositivo. Non è un abbonamento.",
        priv_h1: "1. I Tuoi Dati sono Tuoi", priv_p1: "Prendiamo sul serio la privacy. Essendo un'app 'Offline-First', nessun dato viene trasmesso a noi o a terzi.",
        priv_h2: "2. Archiviazione Locale", priv_p2: "Tutte le informazioni restano fisicamente sul tuo dispositivo. Non abbiamo accesso a questi dati.",
        priv_h3: "3. Analisi e Tracciamento", priv_p3: "Non usiamo strumenti di tracciamento o cookie pubblicitari. Il tuo comportamento non viene monitorato.",
        priv_h4: "4. Cancellazione Dati", priv_p4: "Hai il controllo totale. Puoi eliminare tutto permanentemente resettando l'app nelle impostazioni."
    },
    fr: {
        login_subtitle: "Ton journal familial numérique", login_welcome: "Bienvenue ! Qui es-tu ?", login_name_ph: "Ton prénom (facultatif)", login_role_ph: "Ton rôle (ex. Mamie)",
        role_mom: "Maman", role_dad: "Papa", role_grandma: "Mamie", role_grandpa: "Papi", role_aunt: "Tante", role_uncle: "Oncle", role_godmother: "Marraine", role_godfather: "Parrain", login_btn: "Rejoindre le journal",
        greet_morning: "Bonjour", greet_day: "Bon après-midi", greet_evening: "Bonsoir", 
        trial_banner: "Essai : {d} jour(s) / {h} h restants.", trial_unlock: "Débloquer maintenant ?",
        menu_title: "Menu", menu_home: "Accueil", menu_diary: "Journal / Posts", menu_gallery: "Galerie", menu_milestones: "Étapes", menu_growth: "Croissance",
        menu_food: "Alimentation", menu_sleep: "Sommeil", menu_cycle: "Cycle", menu_shopping: "Courses", menu_pregnancy: "Grossesse", menu_wishlist: "Souhaits", menu_games: "Jeux", menu_stats: "Statistiques",
        btn_add_kid: "+ Enfant", title_diary: "Journal & Posts 📖", btn_new_post: "Créer un post", btn_collapse: "📅 Réduire",
        day_mo: "Lu", day_tu: "Ma", day_we: "Me", day_th: "Je", day_fr: "Ve", day_sa: "Sa", day_su: "Di",
        title_milestones: "Étapes Importantes 🏆", desc_milestones: "Retrouve tous les moments spéciaux.",
        title_add_kid: "Ajouter un enfant", label_name: "Nom", ph_name: "Nom de l'enfant", label_gender: "Genre", opt_boy: "Garçon", opt_girl: "Fille",
        label_date_type: "Type de date", opt_et: "Date Prévue (DPA)", opt_bday: "Date de naissance", label_calc_et: "Date d'accouchement prévue",
        label_size_birth: "Taille à la naissance (opt. cm)", label_weight_birth: "Poids à la naissance (opt. kg)", label_avatar: "Photo de profil / Avatar",
        btn_save: "Enregistrer", btn_delete_profile: "Supprimer le Profil", btn_cancel: "Annuler",
        title_gallery: "Galerie 🖼️", title_growth: "Croissance 📈", label_select_kid: "Sélectionner l'enfant", label_measure_date: "Date de mesure",
        label_size: "Taille (cm)", label_weight: "Poids (kg)", label_shoe: "Pointure (EU, opt.)", btn_save_measure: "Ajouter mesure",
        tab_size: "Taille", tab_weight: "Poids", title_measure_table: "Tableau des mesures",
        title_food: "Alimentation 🍼", title_feed_entry: "Ajouter un repas", label_feed_type: "Type de repas", opt_breast: "Allaitement", opt_bottle: "Biberon",
        label_side: "Quel côté ?", opt_left: "Sein gauche", opt_right: "Sein droit", opt_both: "Les deux", label_duration: "Durée (Minutes)", label_amount: "Quantité (ml)",
        label_time: "Heure", btn_save_feed: "Enregistrer repas", title_feed_history: "Historique d'alimentation",
        title_sleep: "Traqueur de Sommeil 😴", title_sleep_entry: "Ajouter sommeil", label_sleep_start: "Endormi(e) (Date & Heure)", label_sleep_end: "Réveillé(e) (Optionnel)",
        btn_save_sleep: "Enregistrer sommeil", title_sounds: "Sons pour dormir (Offline)", sound_noise: "Bruit", sound_hairdryer: "Sèche-chv.", sound_heartbeat: "Cœur", sound_rain: "Pluie", sound_waves: "Océan",
        title_sleep_chart: "Aperçu du Sommeil", title_sleep_history: "Historique de Sommeil",
        title_cycle: "Traqueur de Cycle 🌸", label_period_in: "Règles dans", cycle_calc: "Calcul des données...", btn_enter_period: "Enregistrer règles",
        title_cycle_history: "Historique du cycle", label_last_months: "Derniers mois",
        title_pregnancy: "Grossesse 🤰", title_status: "Statut", opt_fruits: "Fruits & Légumes", opt_animals: "Animaux", title_comparison: "Comparaison de taille", desc_select_kid: "Sélectionne un enfant ci-dessous.",
        label_exam_date: "Date de l'examen", label_preg_size: "Taille du bébé (opt.)", label_preg_weight: "Poids du bébé (opt.)", label_notes: "Notes", btn_save_exam: "Ajouter examen",
        title_chart: "Courbe de croissance", title_history: "Historique",
        title_wishlist: "Lista de souhaits 🎁", label_wish: "Souhait / Cadeau", label_occasion: "Occasion (facultatif)", label_link: "Lien du produit (opt.)", btn_add_wish: "Ajouter souhait", title_wishes: "Souhaits enregistrés",
        title_shopping: "Liste de courses 🛒", desc_shopping: "Note les couches, repas ou autres achats.", ph_shopping: "ex. Couches Taille 3", btn_add_list: "Ajouter à la liste", title_to_buy: "À acheter",
        title_profile: "Profil", title_your_data: "Tes données", label_your_name: "Ton prénom", label_your_role: "Ton rôle dans la famille",
        title_preg_share: "Vue Grossesse", label_share_family: "Partager avec la famille", title_overview: "Aperçu", menu_manage_family: "Gérer Famille et Accès",
        menu_logout: "Se déconnecter", menu_settings: "Paramètres & Stockage", menu_contact: "Contact et Support", menu_invite: "Inviter des amis", btn_back: "‹ Retour",
        title_pending: "Demandes en attente", title_active_members: "Membres actifs", btn_send_email: "Envoyer par Email",
        lang_select: "Langue / Language", label_push: "Notifications Push", label_unit_size: "Unité Taille", label_unit_weight: "Unité Poids", title_danger: "Gestion des Données",
        btn_del_images: "Supprimer images", btn_del_all: "Réinitialiser l'App", btn_invite_now: "Inviter maintenant",
        title_memory: "Photo Memory", btn_new_game: "Nouvelle Partie", title_paywall: "Temps écoulé", desc_paywall: "Ton essai gratuit est terminé.",
        label_is_milestone: "C'est une étape clé !", btn_edit: "Modifier", btn_delete: "Supprimer", btn_close: "Fermer",
        menu_terms: "Conditions d'utilisation", menu_privacy: "Politique de confidentialité", menu_disclaimer: "Clause de non-responsabilité",
        disclaimer_text: "Clause de non-responsabilité : Tous les calculs sont fournis à titre informatif.",
        btn_confirm: "Confirmer", label_subject: "Sujet", label_message: "Message", ph_subject: "De quoi s'agit-il ?", ph_message: "Écris ta demande ici...",
        terms_h1: "1. Portée et Acceptation", terms_p1: "Bienvenue sur BabySteps ! En utilisant cette app, tu acceptes ces conditions. L'app est un journal familial purement privé.",
        terms_h2: "2. Offline-First et Perte de Données", terms_p2: "BabySteps stocke toutes les données localement sur ton appareil. Il n'y a pas de cloud. Désinstaller l'app ou vider le cache supprimera tout définitivement.",
        terms_h3: "3. Pas d'Avis Médical", terms_p3: "Toutes les fonctions sont à titre informatif et ne remplacent pas un avis ou traitement médical professionnel.",
        terms_h4: "4. Version Premium", terms_p4: "Si débloquée par un paiement, il s'agit d'un paiement unique pour l'appareil. Ce n'est pas un abonnement.",
        priv_h1: "1. Tes Données t'appartiennent", priv_p1: "Nous prenons la vie privée au sérieux. L'app étant 'Offline-First', aucune donnée n'est transmise à nous ou à des tiers.",
        priv_h2: "2. Stockage Local", priv_p2: "Toutes les infos restent physiquement sur ton appareil. Nous n'y avons aucun accès.",
        priv_h3: "3. Analyses et Suivi", priv_p3: "Nous n'utilisons pas d'outils de suivi ni de cookies publicitaires. Ton comportement n'est pas surveillé.",
        priv_h4: "4. Suppression des Données", priv_p4: "Tu as le contrôle total. Tu peux tout supprimer définitivement en réinitialisant l'app dans les paramètres."
    }
};

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('request_lang', lang);
    updateLanguage();
    if (isLoggedIn) {
        renderDashboard();
        renderCalendar();
        updateUnitLabels();
    }
}

function updateLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        let key = el.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) { el.innerText = translations[currentLang][key]; }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        let key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLang] && translations[currentLang][key]) { el.placeholder = translations[currentLang][key]; }
    });
}
document.addEventListener('DOMContentLoaded', updateLanguage);

// ==========================================
// 1. DATEN FÜR SCHWANGERSCHAFT & BASIS
// ==========================================
const sswFruitData = { 4:{emoji:"🌱"}, 5:{emoji:"🍎"}, 6:{emoji:"🫘"}, 7:{emoji:"🫐"}, 8:{emoji:"🍓"}, 9:{emoji:"🍇"}, 10:{emoji:"🫐"}, 11:{emoji:"🍓"}, 12:{emoji:"🍋"}, 13:{emoji:"🍋"}, 14:{emoji:"🍑"}, 15:{emoji:"🍎"}, 16:{emoji:"🥑"}, 17:{emoji:"🍐"}, 18:{emoji:"🫑"}, 19:{emoji:"🥭"}, 20:{emoji:"🍌"}, 21:{emoji:"🥕"}, 22:{emoji:"🥭"}, 23:{emoji:"🍆"}, 24:{emoji:"🌽"}, 25:{emoji:"🥦"}, 26:{emoji:"🥒"}, 27:{emoji:"🥦"}, 28:{emoji:"🎃"}, 29:{emoji:"🎃"}, 30:{emoji:"🍍"}, 31:{emoji:"🥬"}, 32:{emoji:"🥥"}, 33:{emoji:"🥬"}, 34:{emoji:"🍈"}, 35:{emoji:"🍈"}, 36:{emoji:"🥬"}, 37:{emoji:"🥬"}, 38:{emoji:"🌱"}, 39:{emoji:"🍉"}, 40:{emoji:"🎃"} };
const sswAnimalData = { 4:{emoji:"🦠"}, 5:{emoji:"🐜"}, 6:{emoji:"🪰"}, 7:{emoji:"🐝"}, 8:{emoji:"🦋"}, 9:{emoji:"🪲"}, 10:{emoji:"🐸"}, 11:{emoji:"🐦"}, 12:{emoji:"🐁"}, 13:{emoji:"🐟"}, 14:{emoji:"🦇"}, 15:{emoji:"🐿️"}, 16:{emoji:"🐹"}, 17:{emoji:"🐀"}, 18:{emoji:"🦔"}, 19:{emoji:"🐹"}, 20:{emoji:"🦜"}, 21:{emoji:"🐁"}, 22:{emoji:"🐭"}, 23:{emoji:"🐇"}, 24:{emoji:"🦦"}, 25:{emoji:"🕊️"}, 26:{emoji:"🐦"}, 27:{emoji:"🐶"}, 28:{emoji:"🐱"}, 29:{emoji:"🦦"}, 30:{emoji:"🦆"}, 31:{emoji:"🐨"}, 32:{emoji:"🦊"}, 33:{emoji:"🦝"}, 34:{emoji:"🐧"}, 35:{emoji:"🐩"}, 36:{emoji:"🦥"}, 37:{emoji:"🦫"}, 38:{emoji:"🐈"}, 39:{emoji:"🦢"}, 40:{emoji:"🐈"} };

let kids = []; let allPosts = {}; let growthData = {}; let pregnancyData = {}; let wishlistData = {}; let sleepData = {};
let cycleStarts = []; let feedingData = {}; let shoppingList = []; 
let currentUserRole = "Papa 👨"; let assignedRoles = { mama: null, papa: null }; 
let appUnits = { size: 'cm', weight: 'kg', liquid: 'ml', temp: '°C' };
let appSettings = { notif: true, pregShare: false, familyId: "", trialStart: null, hasPaid: false }; 
let isLoggedIn = false; let guestList = []; let pendingGuests = [];
let currentGrowthMetric = 'size'; let currentPregMetric = 'size';

try {
    kids = JSON.parse(localStorage.getItem('request_kids')) || [];
    allPosts = JSON.parse(localStorage.getItem('request_posts')) || {};
    growthData = JSON.parse(localStorage.getItem('request_growth')) || {};
    pregnancyData = JSON.parse(localStorage.getItem('request_pregnancy')) || {};
    wishlistData = JSON.parse(localStorage.getItem('request_wishlist')) || {};
    sleepData = JSON.parse(localStorage.getItem('request_sleep')) || {};
    cycleStarts = JSON.parse(localStorage.getItem('request_cycleStarts')) || [];
    feedingData = JSON.parse(localStorage.getItem('request_feeding')) || {};
    shoppingList = JSON.parse(localStorage.getItem('request_shopping')) || [];
    currentUserRole = localStorage.getItem('request_userRole') || "Papa 👨";
    
    let sR = JSON.parse(localStorage.getItem('request_assignedRoles')); if(sR) assignedRoles = sR;
    let sU = JSON.parse(localStorage.getItem('request_units')); if(sU) appUnits = sU;
    let sS = JSON.parse(localStorage.getItem('request_settings')); if(sS) appSettings = sS;
    let sL = localStorage.getItem('request_isLoggedIn'); if(sL !== null) isLoggedIn = JSON.parse(sL);
    
    guestList = JSON.parse(localStorage.getItem('request_guests')) || [];
    pendingGuests = JSON.parse(localStorage.getItem('request_pending')) || [];
    
    if(!appSettings.familyId) appSettings.familyId = "FAM-" + Math.floor(Math.random() * 1000000);
    if(!appSettings.trialStart) appSettings.trialStart = new Date().getTime();
    
    localStorage.setItem('request_settings', JSON.stringify(appSettings));
} catch(e) { console.error("Fehler beim Lesen:", e); }

let editingIndex = null; let editingGrowthIndex = null; let editingPregIndex = null; let editingWishIndex = null; let editingSleepIndex = null; 
let selectedDayForModal = null; let editingPostIndex = null; let viewingPostIndex = null; let isCalendarExpanded = true; let currentAvatarOverride = null; 

// ==========================================
// HILFSFUNKTIONEN & NEUE SIDEBAR
// ==========================================
function toggleSidebar() {
    let sb = document.getElementById('appSidebar'); let ov = document.getElementById('sidebarOverlay');
    if (sb && ov) { sb.classList.toggle('open'); ov.classList.toggle('open'); }
}

function isChildBorn(kid) {
    if (!kid || !kid.birthDate) return false;
    let today = new Date(); today.setHours(23, 59, 59, 999); 
    return (kid.dateType === 'geburtstag' || new Date(kid.birthDate) <= today) && new Date(kid.birthDate) <= today;
}
function isMomOrDad() { return currentUserRole.includes("Mama") || currentUserRole.includes("Papa"); }
function isKidVisible(index) { let kid = kids[index]; if (!kid) return false; return isChildBorn(kid) || isMomOrDad() || appSettings.pregShare; }

function readFileAsDataURL(file) {
    return new Promise((resolve, reject) => {
        if (file.type.startsWith('video')) { const r = new FileReader(); r.onload = () => resolve(r.result); r.onerror = reject; r.readAsDataURL(file); return; }
        const reader = new FileReader(); reader.readAsDataURL(file);
        reader.onload = (e) => {
            const img = new Image(); img.src = e.target.result;
            img.onload = () => {
                const canvas = document.createElement('canvas'); let w = img.width; let h = img.height; const MAX_DIM = 600;
                if (w > h) { if (w > MAX_DIM) { h *= MAX_DIM / w; w = MAX_DIM; } } else { if (h > MAX_DIM) { w *= MAX_DIM / h; h = MAX_DIM; } }
                canvas.width = w; canvas.height = h; const ctx = canvas.getContext('2d'); ctx.drawImage(img, 0, 0, w, h); resolve(canvas.toDataURL('image/jpeg', 0.5));
            }; img.onerror = reject;
        }; reader.onerror = reject;
    });
}

function ensureInitialGrowthEntry(childIndex, birthDate, size, weight) {
    if (!growthData[childIndex]) growthData[childIndex] = [];
    if (!growthData[childIndex].find(e => e.date === birthDate)) {
        growthData[childIndex].push({ date: birthDate, size: size || "", weight: weight || "", shoe: "" });
        growthData[childIndex].sort((a, b) => new Date(a.date) - new Date(b.date)); localStorage.setItem('request_growth', JSON.stringify(growthData));
    }
}

function ensureOvulationPoint(childIndex, birthDate) {
    let kid = kids[childIndex]; let etDate = new Date(birthDate); if (isNaN(etDate.getTime())) return;
    let ovulationDate = new Date(etDate); ovulationDate.setDate(etDate.getDate() - 266);
    let ovulationDateStr = ovulationDate.toISOString().split('T')[0];

    if (!pregnancyData[childIndex]) pregnancyData[childIndex] = [];
    if (!pregnancyData[childIndex].some(item => Number(item.size) === 0 && Number(item.weight) === 0)) {
        pregnancyData[childIndex].unshift({ date: ovulationDateStr, size: "0", weight: "0", note: "Start der Schwangerschaft (Eisprung)" });
        pregnancyData[childIndex].sort((a, b) => new Date(a.date) - new Date(b.date)); localStorage.setItem('request_pregnancy', JSON.stringify(pregnancyData));
    }
    if (isChildBorn(kid)) {
        if (!growthData[childIndex]) growthData[childIndex] = [];
        if (!growthData[childIndex].some(item => Number(item.size) === 0 && Number(item.weight) === 0)) {
            growthData[childIndex].unshift({ date: ovulationDateStr, size: "0", weight: "0", shoe: "" });
            growthData[childIndex].sort((a, b) => new Date(a.date) - new Date(b.date)); localStorage.setItem('request_growth', JSON.stringify(growthData));
        }
    }
}

// ==========================================
// PAYWALL & RABATTCODES
// ==========================================
function checkTrialStatus() {
    if (appSettings.hasPaid) return true; 
    let now = new Date().getTime(); let elapsed = now - appSettings.trialStart;
    if (elapsed > (72 * 60 * 60 * 1000)) {
        let topBar = document.getElementById('appTopBar'); if(topBar) topBar.style.display = 'none';
        let btn = document.getElementById('paywallBackBtn'); if (btn) btn.style.display = 'none';
        switchScreen('paywallScreen'); return false;
    } else {
        let rem = (72 * 60 * 60 * 1000) - elapsed; let d = Math.floor(rem / 86400000); let h = Math.floor((rem % 86400000) / 3600000);
        let banner = document.getElementById('trialBannerContainer');
        
        let tTxt = translations[currentLang]?.trial_banner || "Testversion: Noch {d} Tag(e) / {h} Std. verbleibend.";
        tTxt = tTxt.replace('{d}', d).replace('{h}', h);
        let uTxt = translations[currentLang]?.trial_unlock || "Jetzt freischalten?";
        
        if (banner) banner.innerHTML = `<div onclick="openPaywallFromBanner()" style="background: rgba(255,255,255,0.7); border: 2px solid var(--accent-gold); padding: 12px; border-radius: 16px; font-size: 0.9rem; color: var(--text-main); margin-bottom: 24px; text-align: center; font-weight: 800; cursor: pointer;">⏳ ${tTxt} <br><span style="text-decoration: underline; color:var(--primary);">${uTxt}</span></div>`;
        let topBar = document.getElementById('appTopBar'); if(topBar && isLoggedIn) topBar.style.display = 'flex';
        return true;
    }
}
function openPaywallFromBanner() { let topBar = document.getElementById('appTopBar'); if(topBar) topBar.style.display = 'none'; let btn = document.getElementById('paywallBackBtn'); if (btn) btn.style.display = 'inline-block'; switchScreen('paywallScreen'); }
function returnToTrial() { if (!isLoggedIn) return; let topBar = document.getElementById('appTopBar'); if(topBar) topBar.style.display = 'flex'; showMainAppScreen(); }
function simulatePayment() { appSettings.hasPaid = true; localStorage.setItem('request_settings', JSON.stringify(appSettings)); let banner = document.getElementById('trialBannerContainer'); if (banner) banner.innerHTML = ''; alert("Vielen Dank! BabySteps Premium wurde erfolgreich freigeschaltet. 🎉"); returnToTrial(); }
function declineAndWipeData() { if (confirm("App wirklich nicht weiter nutzen und ALLE Daten löschen?")) { localStorage.clear(); window.location.reload(); } }
function applyDiscountCode() {
    let input = document.getElementById('discountCodeInput'); if (!input) return; let code = input.value.trim();
    if (code === "Mika31082025") { appSettings.hasPaid = true; localStorage.setItem('request_settings', JSON.stringify(appSettings)); alert("Geheimcode akzeptiert! ✨ Premium wurde dauerhaft und 100% kostenlos freigeschaltet."); returnToTrial(); } 
    else if (code.length === 12) { alert("Rabattcode akzeptiert! Du erhältst 10% Rabatt auf deinen Kauf."); let buyBtn = document.getElementById('buyPremiumBtn'); if (buyBtn) buyBtn.innerHTML = "🔓 Für 17,99€ freischalten (10% Rabatt)"; } 
    else { alert("Dieser Code ist leider ungültig."); }
}

// ==========================================
// INITIALISIERUNG & LOGIN
// ==========================================
function initApp() {
    let nameIn = document.getElementById('profileNameInput'); let roleIn = document.getElementById('profileRoleInput');
    if (currentUserRole) {
        let parts = currentUserRole.split(' (');
        if (parts.length > 1) { if (nameIn) nameIn.value = parts[0]; if (roleIn) roleIn.value = parts[1].replace(')', ''); } 
        else { if (roleIn) roleIn.value = currentUserRole; }
    }
    let hdr = document.getElementById('profileHeaderName'); 
    if (hdr) hdr.innerText = (translations[currentLang]?.title_profile || "Profil") + ` (${currentUserRole.split(' ')[0]})`;
    
    let setNotif = document.getElementById('settingNotif'); if (setNotif) setNotif.checked = appSettings.notif;
    let setPreg = document.getElementById('settingPregShare'); if (setPreg) setPreg.checked = appSettings.pregShare;
    let uSize = document.getElementById('unitSize'); if (uSize) uSize.value = appUnits.size;
    let uWeight = document.getElementById('unitWeight'); if (uWeight) uWeight.value = appUnits.weight;

    updateUnitLabels(); updatePregnancyNavVisibility(); renderAuthStatus();
    kids.forEach((kid, idx) => { if (!kid) return; if (kid.birthDate && kid.dateType && kid.dateType.toLowerCase() === 'et') ensureOvulationPoint(idx, kid.birthDate); if (kid.birthDate && isChildBorn(kid) && (kid.size || kid.weight)) ensureInitialGrowthEntry(idx, kid.birthDate, kid.size, kid.weight); });
    
    let topBar = document.getElementById('appTopBar');
    if (!isLoggedIn) { if(topBar) topBar.style.display = 'none'; switchScreen('loginScreen'); } 
    else { if (checkTrialStatus()) { if(topBar) topBar.style.display = 'flex'; showMainAppScreen(); } }
}
initApp();

function addRoleToInput(inputId, roleKey) {
    let input = document.getElementById(inputId); if (!input) return;
    let roleText = translations[currentLang][roleKey] || roleKey;
    input.value = roleText; 
}

function handleLoginSubmit() { 
    let nameIn = document.getElementById('loginName'); let roleIn = document.getElementById('loginRole');
    let roleStr = roleIn && roleIn.value.trim() !== "" ? roleIn.value.trim() : "Gast 👤";
    if (nameIn && nameIn.value.trim() !== "") currentUserRole = nameIn.value.trim() + " (" + roleStr + ")"; else currentUserRole = roleStr;
    localStorage.setItem('request_userRole', currentUserRole); isLoggedIn = true; localStorage.setItem('request_isLoggedIn', JSON.stringify(isLoggedIn)); 
    
    let pName = document.getElementById('profileNameInput'); if (pName && nameIn) pName.value = nameIn.value.trim();
    let pRole = document.getElementById('profileRoleInput'); if (pRole && roleIn) pRole.value = roleStr;
    let pHdr = document.getElementById('profileHeaderName'); if (pHdr) pHdr.innerText = (translations[currentLang]?.title_profile || "Profil") + ` (${currentUserRole.split(' ')[0]})`;
    
    if (checkTrialStatus()) {
        let topBar = document.getElementById('appTopBar'); if(topBar) topBar.style.display = 'flex';
        renderAuthStatus(); updatePregnancyNavVisibility(); showMainAppScreen(); 
    }
}
function handleLogout() { isLoggedIn = false; localStorage.setItem('request_isLoggedIn', JSON.stringify(isLoggedIn)); let topBar = document.getElementById('appTopBar'); if(topBar) topBar.style.display = 'none'; renderAuthStatus(); switchScreen('loginScreen'); }

function updateDateLabel() { let t = document.getElementById('newDateType'); let l = document.getElementById('labelDateInput'); if (t && l) l.innerText = t.value === 'et' ? (translations[currentLang]?.label_calc_et || "Errechneter Geburtstermin") : (translations[currentLang]?.opt_bday || "Tatsächlicher Geburtstag"); }
function saveUserName() { saveUserRole(); }

function saveUserRole() {
    let nameIn = document.getElementById('profileNameInput'); let roleIn = document.getElementById('profileRoleInput');
    let name = nameIn ? nameIn.value.trim() : ""; let roleStr = roleIn && roleIn.value.trim() !== "" ? roleIn.value.trim() : "Gast 👤";
    if (name) currentUserRole = name + " (" + roleStr + ")"; else currentUserRole = roleStr;
    
    let isMom = false; let isDad = false;
    Object.keys(translations).forEach(lang => {
        if (roleStr.includes(translations[lang].role_mom)) isMom = true;
        if (roleStr.includes(translations[lang].role_dad)) isDad = true;
    });

    if (isMom) { 
        let base = currentUserRole; if (currentUserRole.includes(' (')) { let p = currentUserRole.split(' ('); if (p.length > 1) base = p[1].replace(')', ''); }
        if (assignedRoles.mama && assignedRoles.mama !== currentUserRole && assignedRoles.mama !== base) { alert("Rolle Mama ist vergeben!"); return; } assignedRoles.mama = currentUserRole; 
    } else if (isDad) { 
        let base = currentUserRole; if (currentUserRole.includes(' (')) { let p = currentUserRole.split(' ('); if (p.length > 1) base = p[1].replace(')', ''); }
        if (assignedRoles.papa && assignedRoles.papa !== currentUserRole && assignedRoles.papa !== base) { alert("Rolle Papa ist vergeben!"); return; } assignedRoles.papa = currentUserRole; 
    }
    
    localStorage.setItem('request_userRole', currentUserRole); localStorage.setItem('request_assignedRoles', JSON.stringify(assignedRoles));
    let hdr = document.getElementById('profileHeaderName'); if (hdr) hdr.innerText = (translations[currentLang]?.title_profile || "Profil") + ` (${currentUserRole.split(' ')[0]})`;
    updatePregnancyNavVisibility(); if(isLoggedIn) renderDashboard();
}

function updatePregnancyNavVisibility() {
    let parentEls = document.querySelectorAll('.parent-only');
    let pregItem = document.getElementById('navPregnancyItem');
    
    if (isMomOrDad()) {
        parentEls.forEach(el => el.style.display = 'flex');
        if (pregItem) pregItem.style.display = 'flex';
        let shareCard = document.getElementById('familyPregnancyShareCard'); if(shareCard) shareCard.style.display = 'block';
        let dangerCard = document.getElementById('dangerZoneCard'); if(dangerCard) dangerCard.style.display = 'block';
        let addK = document.getElementById('addKidBtn'); if(addK) addK.style.display = 'block';
    } else {
        parentEls.forEach(el => el.style.display = 'none');
        if (pregItem) pregItem.style.display = appSettings.pregShare ? 'flex' : 'none';
        let shareCard = document.getElementById('familyPregnancyShareCard'); if(shareCard) shareCard.style.display = 'none';
        let dangerCard = document.getElementById('dangerZoneCard'); if(dangerCard) dangerCard.style.display = 'none';
        let addK = document.getElementById('addKidBtn'); if(addK) addK.style.display = 'none';
        
        ['foodScreen', 'sleepScreen', 'cycleScreen', 'shoppingScreen', 'familySubpage', 'referralSubpage'].forEach(id => {
            let sc = document.getElementById(id); if (sc && sc.classList.contains('active')) showMainAppScreen();
        });
        if (!appSettings.pregShare) { let ps = document.getElementById('pregnancyScreen'); if (ps && ps.classList.contains('active')) showMainAppScreen(); }
    }
}

// ==========================================
// SCROLL-FIX: NAVIGATION FUNKTIONEN
// ==========================================
function switchScreen(screenId) { 
    Array.from(document.querySelectorAll('.screen')).forEach(s => s.classList.remove('active')); 
    let t = document.getElementById(screenId); if (t) t.classList.add('active'); 
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    let b = document.body; b.className = ''; 
    if (screenId === 'foodScreen') b.classList.add('bg-food');
    else if (screenId === 'sleepScreen') b.classList.add('bg-sleep');
    else if (screenId === 'growthScreen') b.classList.add('bg-growth');
    else if (screenId === 'pregnancyScreen' || screenId === 'cycleScreen') b.classList.add('bg-pregnancy');
    else if (screenId === 'shoppingScreen') b.classList.add('bg-shopping');
    else if (screenId === 'gamesScreen') b.classList.add('bg-games');
    else b.classList.add('bg-home');
}

function switchNav(screenId) {
    if (!checkTrialStatus()) return; 
    switchScreen(screenId); 
    
    if (screenId === 'profileScreen') closeProfileSubpage();
    if (screenId === 'galleryScreen') renderGallery();
    if (screenId === 'growthScreen') initGrowthScreen();
    if (screenId === 'foodScreen') initFoodScreen();
    if (screenId === 'sleepScreen') initSleepScreen();
    if (screenId === 'pregnancyScreen') initPregnancyScreen();
    if (screenId === 'wishlistScreen') initWishlistScreen();
    if (screenId === 'shoppingScreen') renderShoppingList();
    if (screenId === 'statsScreen') renderStats();
    if (screenId === 'gamesScreen') initMemoryScreen();
    if (screenId === 'cycleScreen') initCycleScreen();
    if (screenId === 'milestoneScreen') initMilestoneScreen();
    if (screenId === 'postsScreen') renderPostsScreen();
}

function openProfileSubpage(id) { 
    let main = document.getElementById('profileMainView'); if (main) main.style.display = 'none'; 
    Array.from(document.querySelectorAll('#profileScreen .subpage')).forEach(p => p.classList.remove('active'));
    let t = document.getElementById(id); if(t) t.classList.add('active'); 
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (id === 'authSubpage') renderAuthStatus(); if (id === 'familySubpage') renderFamilyManagement();
}

function closeProfileSubpage() { 
    Array.from(document.querySelectorAll('#profileScreen .subpage')).forEach(p => p.classList.remove('active')); 
    let main = document.getElementById('profileMainView'); if (main) main.style.display = 'block'; 
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showMainAppScreen() { if (!checkTrialStatus()) return; renderDashboard(); switchScreen('mainAppScreen'); }

function renderAuthStatus() {
    let c = document.getElementById('authStatusContainer'); if (!c) return;
    if (isLoggedIn) c.innerHTML = `<div class="highlight-box">🟢 Angemeldet / Logged in: <strong>${currentUserRole}</strong>.</div><button onclick="handleLogout()" class="btn" style="background:#fee2e2; color:#dc2626;">🔒 ${translations[currentLang]?.menu_logout||'Abmelden'}</button>`;
    else c.innerHTML = `<div class="highlight-box">🔴 Abgemeldet / Logged out.</div><button onclick="handleLoginSubmit()" class="btn">🔑 Login</button>`;
}
function submitContactForm() {
    let subEl = document.getElementById('contactSubjectInput'); 
    let msgEl = document.getElementById('contactUserMsg'); 
    if (!msgEl) return; 
    
    let subject = subEl ? subEl.value.trim() : "Support Anfrage";
    let msg = msgEl.value.trim(); 
    if (!msg) { alert("Bitte eine Nachricht eingeben."); return; }
    
    window.location.href = `mailto:babystep@gmx.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(msg)}`; 
    if(subEl) subEl.value = ''; 
    msgEl.value = ''; 
    closeProfileSubpage();
}
function saveSettings() {
    let n = document.getElementById('settingNotif'); let p = document.getElementById('settingPregShare');
    appSettings = { notif: n ? n.checked : appSettings.notif, pregShare: p ? p.checked : appSettings.pregShare, familyId: appSettings.familyId, trialStart: appSettings.trialStart, hasPaid: appSettings.hasPaid }; localStorage.setItem('request_settings', JSON.stringify(appSettings));
    let us = document.getElementById('unitSize'); let uw = document.getElementById('unitWeight'); appUnits = { size: us ? us.value : 'cm', weight: uw ? uw.value : 'kg' }; localStorage.setItem('request_units', JSON.stringify(appUnits)); 
    updateUnitLabels(); updatePregnancyNavVisibility(); renderDashboard();
}
function updateUnitLabels() {
    let l1 = document.getElementById('labelSizeBirth'); if(l1) l1.innerText = (translations[currentLang]?.label_size_birth || 'Größe') + ` (${appUnits.size})`;
    let l2 = document.getElementById('labelWeightBirth'); if(l2) l2.innerText = (translations[currentLang]?.label_weight_birth || 'Gewicht') + ` (${appUnits.weight})`;
    let l3 = document.getElementById('labelGrowthSize'); if(l3) l3.innerText = (translations[currentLang]?.label_size || 'Größe') + ` (${appUnits.size})`;
    let l4 = document.getElementById('labelGrowthWeight'); if(l4) l4.innerText = (translations[currentLang]?.label_weight || 'Gewicht') + ` (${appUnits.weight})`;
    let l5 = document.getElementById('labelPregSize'); if(l5) l5.innerText = (translations[currentLang]?.label_preg_size || 'Größe (opt.)') + ` (${appUnits.size})`;
    let l6 = document.getElementById('labelPregWeight'); if(l6) l6.innerText = (translations[currentLang]?.label_preg_weight || 'Gewicht (opt.)') + ` (${appUnits.weight})`;
}

// ==========================================
// FAMILIENVERWALTUNG & RESET
// ==========================================
function renderFamilyManagement() {
    let pC = document.getElementById('pendingGuestsList'); if(pC) pC.innerHTML = ''; let lC = document.getElementById('familyGuestList'); if(lC) lC.innerHTML = '';
    if (pendingGuests.length === 0 && pC) pC.innerHTML = '<p style="font-size:0.85rem; color:var(--text-muted); margin:0;">-</p>';
    else pendingGuests.forEach((g, i) => { if(pC){ let d = document.createElement('div'); d.style.cssText = "background:rgba(255,255,255,0.8); padding:12px; border-radius:12px; display:flex; justify-content:space-between; align-items:center;"; d.innerHTML = `<div><b>${g.name}</b><br><span style="font-size:0.75rem;">${g.role}</span></div><div><button onclick="approveGuest(${i})" class="btn" style="padding:6px; background:#25D366; width:auto;">✓</button> <button onclick="rejectGuest(${i})" class="btn" style="padding:6px; background:#ef4444; width:auto;">X</button></div>`; pC.appendChild(d); } });
    if (guestList.length === 0 && lC) lC.innerHTML = '<p style="font-size:0.85rem; color:var(--text-muted); margin:0;">-</p>';
    else guestList.forEach((g, i) => { if(lC){ let d = document.createElement('div'); d.style.cssText = "background:rgba(255,255,255,0.8); padding:12px; border-radius:12px; display:flex; justify-content:space-between; align-items:center;"; d.innerHTML = `<div><b>${g.name ? g.name+' ('+g.role+')' : g.role}</b></div><button onclick="removeGuest(${i})" style="background:none; color:#ef4444; border:none; cursor:pointer;">X</button>`; lC.appendChild(d); } });
}
function approveGuest(i) { pendingGuests[i].status = "Aktiv"; guestList.push(pendingGuests[i]); pendingGuests.splice(i, 1); localStorage.setItem('request_guests', JSON.stringify(guestList)); localStorage.setItem('request_pending', JSON.stringify(pendingGuests)); renderFamilyManagement(); }
function rejectGuest(i) { if(confirm(`Sure?`)) { pendingGuests.splice(i, 1); localStorage.setItem('request_pending', JSON.stringify(pendingGuests)); renderFamilyManagement(); } }
function removeGuest(i) { if(confirm(`Sure?`)) { guestList.splice(i, 1); localStorage.setItem('request_guests', JSON.stringify(guestList)); renderFamilyManagement(); } }

let resetClickStates = {};
function executeDataReset(type, btnId, defaultText) {
    let btn = document.getElementById(btnId); if (!btn) return;
    if (!resetClickStates[type]) {
        resetClickStates[type] = true; btn.innerText = "Sure? 1x tap!"; btn.style.background = "#dc2626"; btn.style.color = "white";
        setTimeout(() => { resetClickStates[type] = false; if(btn) { btn.innerText = defaultText; btn.style.background = type === 'all' ? "#dc2626" : "#fee2e2"; btn.style.color = type === 'all' ? "white" : "#dc2626"; } }, 4000);
    } else {
        if (type === 'all') { localStorage.clear(); window.location.reload(); } 
        else if (type === 'sleep') { sleepData = {}; feedingData = {}; localStorage.setItem('request_sleep', JSON.stringify(sleepData)); localStorage.setItem('request_feeding', JSON.stringify(feedingData)); resetClickStates[type] = false; btn.innerText = defaultText; btn.style.background = "#fee2e2"; btn.style.color = "#dc2626"; } 
        else if (type === 'images') {
            Object.keys(allPosts).forEach(d => { if (allPosts[d]) allPosts[d].forEach(p => p.media = []); });
            Object.keys(pregnancyData).forEach(i => { if (pregnancyData[i]) pregnancyData[i].forEach(p => p.media = []); });
            localStorage.setItem('request_posts', JSON.stringify(allPosts)); localStorage.setItem('request_pregnancy', JSON.stringify(pregnancyData));
            resetClickStates[type] = false; btn.innerText = defaultText; btn.style.background = "#fee2e2"; btn.style.color = "#dc2626";
        }
    }
}

// ==========================================
// KINDER-VERWALTUNG
// ==========================================
function showAddChildScreen() {
    editingIndex = null; currentAvatarOverride = null; 
    let t = document.getElementById('formTitle'); if(t) t.innerText = translations[currentLang]?.title_add_kid || "Kind anlegen"; 
    ['newName', 'newBirthDate', 'newSize', 'newWeight', 'newImageFile'].forEach(id => { let el = document.getElementById(id); if(el) el.value = ''; });
    let elGen = document.getElementById('newGender'); if(elGen) elGen.value='male'; let elDT = document.getElementById('newDateType'); if(elDT) elDT.value='et';
    let del = document.getElementById('deleteChildBtn'); if(del) del.style.display = 'none'; updateDateLabel(); switchScreen('addChildScreen');
}

function openEditChild(index) {
    if (!isMomOrDad()) return; 
    editingIndex = index; currentAvatarOverride = null; let kid = kids[index];
    let formTitle = document.getElementById('formTitle'); if (formTitle) formTitle.innerText = translations[currentLang]?.btn_edit || "Bearbeiten"; 
    let newName = document.getElementById('newName'); if (newName) newName.value = kid.name || '';
    let newGender = document.getElementById('newGender'); if (newGender) newGender.value = kid.gender || 'male'; 
    let newDateType = document.getElementById('newDateType'); if (newDateType) newDateType.value = kid.dateType || 'et';
    let newBirthDate = document.getElementById('newBirthDate'); if (newBirthDate) newBirthDate.value = kid.birthDate || ''; 
    let newSize = document.getElementById('newSize'); if (newSize) newSize.value = kid.size || '';
    let newWeight = document.getElementById('newWeight'); if (newWeight) newWeight.value = kid.weight || ''; 
    let newImageFile = document.getElementById('newImageFile'); if (newImageFile) newImageFile.value = '';
    let delBtn = document.getElementById('deleteChildBtn'); if (delBtn) delBtn.style.display = 'inline-block';
    updateDateLabel(); switchScreen('addChildScreen');
}

async function saveNewChildData() {
    let n = document.getElementById('newName').value.trim();
    let g = document.getElementById('newGender').value;
    let dt = document.getElementById('newDateType').value;
    let bd = document.getElementById('newBirthDate').value;
    let sz = document.getElementById('newSize').value;
    let wt = document.getElementById('newWeight').value;
    let fInp = document.getElementById('newImageFile');
    
    if (!n || !bd) return;
    
    let avatarUrl = null;
    if (fInp && fInp.files && fInp.files.length > 0) { avatarUrl = await readFileAsDataURL(fInp.files[0]); } 
    else if (editingIndex !== null && kids[editingIndex].avatar) { avatarUrl = kids[editingIndex].avatar; }
    
    let kid = { name: n, gender: g, dateType: dt, birthDate: bd, size: sz, weight: wt, avatar: avatarUrl };
    
    if (editingIndex !== null) { kids[editingIndex] = kid; } 
    else { kids.push(kid); editingIndex = kids.length - 1; }
    
    localStorage.setItem('request_kids', JSON.stringify(kids));
    if (dt === 'et') ensureOvulationPoint(editingIndex, bd);
    if (isChildBorn(kid) && (sz || wt)) ensureInitialGrowthEntry(editingIndex, bd, sz, wt);
    editingIndex = null; updatePregnancyNavVisibility(); showMainAppScreen();
}

function deleteChildFromEdit() { if (editingIndex !== null && confirm("Sure?")) { kids.splice(editingIndex, 1); localStorage.setItem('request_kids', JSON.stringify(kids)); switchNav('mainAppScreen'); } }

function calculateAgeString(bdStr) {
    let bd = new Date(bdStr); let today = new Date(); let diff = Math.floor((today - bd) / 86400000);
    
    let t = {
        de: { not: "Noch nicht geboren", today: "Heute geboren", days: "Tag(e) alt", months: "Monat(e) alt", years: "Jahr(e) alt" },
        en: { not: "Not born yet", today: "Born today", days: "day(s) old", months: "month(s) old", years: "year(s) old" },
        es: { not: "Aún no nacido", today: "Nacido hoy", days: "día(s)", months: "mes(es)", years: "año(s)" },
        it: { not: "Non ancora nato", today: "Nato oggi", days: "giorno/i", months: "mese/i", years: "anno/i" },
        fr: { not: "Pas encore né", today: "Né aujourd'hui", days: "jour(s)", months: "mois", years: "an(s)" }
    };
    let lang = t[currentLang] || t['de'];

    if (diff < 0) return lang.not; 
    if (diff === 0) return lang.today;
    if (diff < 31) return `${diff} ${lang.days}`; 
    if (diff < 365) return `${Math.floor(diff / 30.44)} ${lang.months}`; 
    return `ca. ${(diff / 365.25).toFixed(1)} ${lang.years}`;
}

function renderDashboard() {
    checkTrialStatus(); let c = document.getElementById('kidsDashboard'); let h = document.getElementById('dynamicWelcomeHeader'); if (!c || !h) return; c.innerHTML = '';
    
    let hr = new Date().getHours(); 
    let gr = hr < 11 ? (translations[currentLang]?.greet_morning || "Guten Morgen") : (hr < 18 ? (translations[currentLang]?.greet_day || "Guten Tag") : (translations[currentLang]?.greet_evening || "Guten Abend"));
    
    h.innerHTML = `<div><div class="welcome-header">${gr}, ${currentUserRole.split(' ')[0]}!</div><div class="welcome-sub">${translations[currentLang]?.login_subtitle || 'Willkommen'}</div></div>`;

    let shHtml = '<div class="kids-showcase-vertical">'; let vCount = 0;
    
    kids.forEach((kid, i) => {
        if (!kid || !isKidVisible(i)) return; vCount++;
        let isSlp = (sleepData[i] && sleepData[i].length > 0) ? sleepData[i][0].isSleeping : false;
        let sInfo = ""; let tVal = kid.dateType ? kid.dateType.toLowerCase() : 'et';
        
        if (tVal === 'geburtstag' || isChildBorn(kid)) { sInfo = `${kid.birthDate ? calculateAgeString(kid.birthDate) : '-'}`; } 
        else {
            if(kid.birthDate) { let diff = Math.ceil((new Date(kid.birthDate) - new Date()) / 86400000); let wk = Math.max(1, Math.min(40, Math.floor((266 - diff) / 7) + 1)); sInfo = `SSW ${wk} ${sswFruitData[wk]?.emoji||'👶'}`; } 
            else { sInfo = `ET -`; }
        }
        
        let bgUrl = kid.avatar || 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600';
        let clickAction = isMomOrDad() ? `onclick="openEditChild(${i})"` : '';
        
        shHtml += `
        <div class="kid-card-large" ${clickAction}>
            <div class="kid-card-bg" style="background-image: url('${bgUrl}');"></div>
            <div class="kid-card-content">
                ${isSlp ? '<div style="font-size:2.5rem; margin-bottom:8px; animation: pulseSleep 2s infinite ease-in-out;">💤</div>' : ''}
                <div class="kid-name-large">${kid.name}</div>
                <div class="kid-sub-large">${sInfo}</div>
            </div>
        </div>`;
    });
    shHtml += '</div>';

    if (vCount === 0) { c.innerHTML = isMomOrDad() ? `<div class="card" style="text-align:center; padding: 30px 20px;"><div style="font-size:3rem; margin-bottom:10px;">👶</div><h3 style="margin-top:0; color:var(--primary);">${translations[currentLang]?.login_welcome || "Willkommen!"}</h3><button onclick="showAddChildScreen()" class="btn" style="width:auto; margin-top:10px;">Jetzt starten</button></div>` : `<div class="card" style="text-align:center; padding: 30px 20px;">-</div>`; return; }
    c.innerHTML = shHtml;
}

function renderPostsScreen() {
    let tD = new Date().getDate(); 
    let c = document.getElementById('latestPostsContainer'); if (!c) return; c.innerHTML = '';
    
    let lPosts = ''; let lPost = null; let lDay = null; let allD = Object.keys(allPosts).sort((a,b)=>b-a);
    for (let d of allD) { if (allPosts[d]) { for (let i=allPosts[d].length-1; i>=0; i--) { if (isKidVisible(allPosts[d][i].childIndex)) { lPost = allPosts[d][i]; lDay = d; break; } } } if (lPost) break; }

    if (lPost) {
        let n = new Date(); let dStr = `${String(lDay).padStart(2,'0')}.${String(n.getMonth()+1).padStart(2,'0')}.${n.getFullYear()}`;
        let fM = (lPost.media && lPost.media.length > 0) ? lPost.media[0] : null; let fSrc = fM ? (typeof fM==='string'?fM:fM.url) : null;
        let iH = fSrc ? `<img src="${fSrc}" style="width:60px; height:60px; border-radius:12px; object-fit:cover;">` : `<div style="width:60px; height:60px; background:var(--primary-light); display:flex; align-items:center; justify-content:center; font-size:1.5rem; border-radius:12px; color:var(--primary);">📝</div>`;
        let kidName = kids[lPost.childIndex] ? kids[lPost.childIndex].name : 'Kind';
        let msIcon = lPost.isMilestone ? '🏆 ' : '';
        
        lPosts = `<div class="card fade-in" style="padding:16px; border-radius:24px;"><div style="font-size:0.85rem; font-weight:bold; color:var(--text-muted); margin-bottom:12px; display:flex; justify-content:space-between;"><span>${dStr}</span><span style="color:var(--primary);">Neu</span></div><div onclick="openViewPostModal(${lDay}, ${lPost.childIndex}, ${allPosts[lDay].indexOf(lPost)})" style="display:flex; align-items:center; gap:16px; cursor:pointer;">${iH}<div style="flex:1;"><div style="font-size:1.1rem; font-weight:800; margin-bottom:4px; color:var(--text-main);">${msIcon}${kidName}</div><div style="font-size:0.95rem; color:var(--text-muted); overflow:hidden; text-overflow:ellipsis; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical;">${lPost.text||'...'}</div></div></div></div>`;
    }
    c.innerHTML = lPosts; renderCalendar();
}

// ==========================================
// EINKAUFSLISTE
// ==========================================
function saveShoppingItem() { let inp = document.getElementById('shoppingInput'); if (!inp) return; let v = inp.value.trim(); if (!v) return; shoppingList.push({ text: v, done: false }); localStorage.setItem('request_shopping', JSON.stringify(shoppingList)); inp.value = ''; renderShoppingList(); }
function toggleShoppingItem(i) { if(shoppingList[i]) { shoppingList[i].done = !shoppingList[i].done; localStorage.setItem('request_shopping', JSON.stringify(shoppingList)); renderShoppingList(); } }
function deleteShoppingItem(i) { shoppingList.splice(i, 1); localStorage.setItem('request_shopping', JSON.stringify(shoppingList)); renderShoppingList(); }
function renderShoppingList() {
    let c = document.getElementById('shoppingListContainer'); if (!c) return; c.innerHTML = '';
    if (shoppingList.length === 0) { c.innerHTML = '<p style="font-size:0.95rem; font-weight:600; color:var(--text-muted);">-</p>'; return; }
    shoppingList.forEach((item, i) => {
        let d = document.createElement('div'); d.style.cssText = `background:rgba(255,255,255,0.8); padding:16px; border-radius:16px; font-size:1rem; display:flex; justify-content:space-between; align-items:center; ${item.done ? 'opacity:0.5;' : ''}`;
        d.innerHTML = `<div style="display:flex; align-items:center; gap:12px; flex:1;"><input type="checkbox" ${item.done ? 'checked' : ''} onchange="toggleShoppingItem(${i})" style="width:20px; height:20px; accent-color:var(--primary);"><span style="${item.done ? 'text-decoration:line-through;' : ''} font-weight:800;">${item.text}</span></div><button onclick="deleteShoppingItem(${i})" style="background:none; border:none; cursor:pointer; font-size:1.4rem; color:#ef4444;">🗑️</button>`; c.appendChild(d);
    });
}

// ==========================================
// NAHRUNG & SCHLAF
// ==========================================
function initFoodScreen() { let s = document.getElementById('foodChildSelect'); if (!s) return; s.innerHTML = ''; kids.forEach((k, idx) => { if (!isKidVisible(idx)) return; let o = document.createElement('option'); o.value = idx; o.innerText = k.name; s.appendChild(o); }); let t = document.getElementById('feedingTimeInput'); if (t) { let n = new Date(); t.value = `${String(n.getHours()).padStart(2, '0')}:${String(n.getMinutes()).padStart(2, '0')}`; } toggleFeedingFields(); renderFoodData(); }
function toggleFeedingFields() { let t = document.getElementById('feedingTypeInput'); let b = document.getElementById('brustFieldsContainer'); let f = document.getElementById('flascheFieldsContainer'); if (t && b && f) { if (t.value === 'brust') { b.style.display = 'block'; f.style.display = 'none'; } else { b.style.display = 'none'; f.style.display = 'block'; } } }
function saveFeedingEntry() {
    let s = document.getElementById('foodChildSelect'); if (!s) return; let cIdx = s.value;
    let t = document.getElementById('feedingTypeInput').value; let tm = document.getElementById('feedingTimeInput').value; if(!tm) return;
    let e = { type: t, time: tm, date: new Date().toISOString() };
    if(t === 'brust') { e.side = document.getElementById('feedingSideInput').value; e.duration = document.getElementById('feedingDurationInput').value || "?"; } else { e.amount = document.getElementById('feedingAmountInput').value || "?"; }
    if(!feedingData[cIdx]) feedingData[cIdx] = []; feedingData[cIdx].push(e); feedingData[cIdx].sort((a,b) => new Date(b.date) - new Date(a.date)); localStorage.setItem('request_feeding', JSON.stringify(feedingData));
    let n = new Date(); document.getElementById('feedingTimeInput').value = `${String(n.getHours()).padStart(2, '0')}:${String(n.getMinutes()).padStart(2, '0')}`; document.getElementById('feedingDurationInput').value = ''; document.getElementById('feedingAmountInput').value = ''; renderFoodData();
}
function deleteFeedingEntry(i) { if(confirm("Löschen?")) { let c = document.getElementById('foodChildSelect').value; feedingData[c].splice(i, 1); localStorage.setItem('request_feeding', JSON.stringify(feedingData)); renderFoodData(); } }
function renderFoodData() {
    let s = document.getElementById('foodChildSelect'); if(!s) return; let c = s.value; let list = feedingData[c] || []; let cont = document.getElementById('feedingHistoryList'); if (!cont) return; cont.innerHTML = '';
    if (list.length === 0) { cont.innerHTML = '<p style="font-size:0.95rem; font-weight:600; color:var(--text-muted);">-</p>'; return; }
    list.forEach((item, idx) => {
        let d = document.createElement('div'); d.style.cssText = "background:rgba(255,255,255,0.8); padding:16px; border-radius:16px; display:flex; justify-content:space-between; align-items:center;";
        let brText = translations[currentLang]?.opt_breast || 'Brust';
        let boText = translations[currentLang]?.opt_bottle || 'Flasche';
        let det = item.type === 'brust' ? `<span style="color:#b45309; font-weight:800;">${brText} (${item.side})</span> - ${item.duration} Min.` : `<span style="color:#b45309; font-weight:800;">${boText}</span> - ${item.amount} ml`;
        let ic = item.type === 'brust' ? "🤱" : "🍼";
        d.innerHTML = `<div><div style="font-size:1.5rem; margin-bottom:4px;">${ic} <span style="font-size:1.1rem; font-weight:800; color:var(--text-main);">${item.time}</span></div><div style="color:var(--text-muted); font-size:0.95rem;">${det}</div></div><button onclick="deleteFeedingEntry(${idx})" style="background:none; border:none; cursor:pointer; font-size:1.4rem; color:#ef4444;">🗑️</button>`; cont.appendChild(d);
    });
}

function initSleepScreen() { let s = document.getElementById('sleepChildSelect'); if (s) { s.innerHTML = ''; kids.forEach((k, idx) => { if (!isKidVisible(idx)) return; let o = document.createElement('option'); o.value = idx; o.innerText = k.name; s.appendChild(o); }); } resetSleepForm(); renderSleepData(); }
function resetSleepForm() { ['sleepStartInput','sleepEndInput'].forEach(id => { let el = document.getElementById(id); if(el) el.value = ''; }); let btn = document.getElementById('sleepFormButtons'); if (btn) btn.innerHTML = `<button onclick="saveSleepEntry()" class="btn" style="background:#8CA692;">${translations[currentLang]?.btn_save_sleep||'Speichern'}</button>`; editingSleepIndex = null; }
function saveSleepEntry() {
    let s = document.getElementById('sleepChildSelect'); if (!s) return; let c = s.value;
    let sInp = document.getElementById('sleepStartInput'); let st = sInp ? sInp.value : ''; let eInp = document.getElementById('sleepEndInput'); let en = eInp ? eInp.value : ''; if (!st) return;
    let sTime = new Date(st).getTime(); let dMins = 0; let isSlp = true;
    if (en) { let eTime = new Date(en).getTime(); if (eTime <= sTime) return; dMins = Math.round((eTime - sTime) / 60000); isSlp = false; }
    let entry = { start: st, end: en || null, duration: dMins, isSleeping: isSlp };
    if (!sleepData[c]) sleepData[c] = []; if (editingSleepIndex !== null) sleepData[c][editingSleepIndex] = entry; else sleepData[c].push(entry);
    sleepData[c].sort((a, b) => new Date(b.start) - new Date(a.start)); localStorage.setItem('request_sleep', JSON.stringify(sleepData)); resetSleepForm(); renderSleepData(); renderDashboard();
}
function formatDuration(m) { let h = Math.floor(m / 60); let mn = m % 60; return h > 0 ? `${h}h ${mn}m` : `${mn}m`; }
function editSleepEntry(i) { let c = document.getElementById('sleepChildSelect').value; let it = sleepData[c][i]; document.getElementById('sleepStartInput').value = it.start; document.getElementById('sleepEndInput').value = it.end || ''; editingSleepIndex = i; document.getElementById('sleepFormButtons').innerHTML = `<button onclick="saveSleepEntry()" class="btn" style="background:#8CA692;">Aktualisieren</button><button onclick="resetSleepForm()" class="btn btn-secondary" style="margin-top:6px; background:rgba(255,255,255,0.2); color:white;">Abbrechen</button>`; }
function wakeUpChild(i) { let c = document.getElementById('sleepChildSelect').value; let it = sleepData[c][i]; let now = new Date(); now.setMinutes(now.getMinutes() - now.getTimezoneOffset()); it.end = now.toISOString().slice(0, 16); it.duration = Math.round((new Date(it.end).getTime() - new Date(it.start).getTime()) / 60000); it.isSleeping = false; localStorage.setItem('request_sleep', JSON.stringify(sleepData)); renderSleepData(); renderDashboard(); }
function renderSleepData() {
    let s = document.getElementById('sleepChildSelect'); if (!s) return; let c = s.value; let cont = document.getElementById('sleepHistoryList'); if (!cont) return; cont.innerHTML = ''; let cCont = document.getElementById('sleepChartContainer');
    if (!sleepData[c] || sleepData[c].length === 0) { cont.innerHTML = '<p style="font-size:0.95rem; font-weight:600; color:#93c5fd;">-</p>'; if(cCont) cCont.innerHTML = ''; return; }
    sleepData[c].forEach((it, i) => {
        let d = document.createElement('div'); d.style.cssText = "background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.15); padding:16px; border-radius:16px; display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;";
        let opt = { day:'2-digit', month:'2-digit', hour:'2-digit', minute:'2-digit' };
        let dTx = it.isSleeping ? `<span style="color:#60a5fa; font-weight:800; font-size:1.1rem;">😴</span>` : `${formatDuration(it.duration)}`;
        let eTx = it.isSleeping ? `<button onclick="wakeUpChild(${i})" style="margin-top:8px; padding:10px 16px; border-radius:12px; border:none; background:#8CA692; color:white; font-size:0.9rem; font-weight:800; cursor:pointer;">Aufgewacht</button>` : `${new Date(it.end).toLocaleString(getLocale(), opt)}`;
        d.innerHTML = `<div><div style="font-weight:800; margin-bottom:6px; font-size:1.1rem; color:white;">${dTx}</div><div style="color:#93c5fd; font-weight:600;">In: ${new Date(it.start).toLocaleString(getLocale(), opt)}</div><div style="color:#93c5fd; font-weight:600;">Out: ${eTx}</div></div><div style="display:flex; gap:10px;"><button onclick="editSleepEntry(${i})" style="background:none; border:none; font-size:1.4rem; cursor:pointer;">✏️</button><button onclick="deleteSleepEntry(${i})" style="background:none; border:none; font-size:1.4rem; cursor:pointer;">🗑️</button></div>`; cont.appendChild(d);
    });
    if (cCont) renderSleepChart(sleepData[c], cCont);
}
function renderSleepChart(list, cont) {
    cont.innerHTML = ''; let tStr = new Date().toLocaleDateString('de-DE'); let tEnt = list.filter(i => new Date(i.start).toLocaleDateString('de-DE') === tStr);
    if (tEnt.length === 0) { cont.innerHTML = '<p style="font-size:0.95rem; font-weight:600; color:#93c5fd;">-</p>'; return; }
    let cData = tEnt.slice().reverse().map(i => { let m = i.duration; if (i.isSleeping) m = Math.max(0, Math.round((new Date() - new Date(i.start)) / 60000)); return { start: new Date(i.start), d: m, isSlp: i.isSleeping }; });
    let w = 500, h = 200, pL = 40, pR = 20, pB = 30, pT = 20; let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"); svg.setAttribute("viewBox", `0 0 ${w} ${h}`); svg.style.width = "100%";
    let m = Math.max(...cData.map(x => x.d)); if (m === 0) m = 60; let hrs = Math.max(Math.ceil(m / 60), 2);
    for (let i = 0; i <= hrs; i += Math.max(1, Math.ceil(hrs/4))) {
        let y = pT + (h - pB - pT) - (i / hrs) * (h - pB - pT); let l = document.createElementNS("http://www.w3.org/2000/svg", "line"); l.setAttribute("x1", pL); l.setAttribute("y1", y); l.setAttribute("x2", w - pR); l.setAttribute("y2", y); l.setAttribute("stroke", "rgba(255,255,255,0.2)"); l.setAttribute("stroke-dasharray", "3,3"); svg.appendChild(l);
        let t = document.createElementNS("http://www.w3.org/2000/svg", "text"); t.setAttribute("x", pL - 5); t.setAttribute("y", y + 4); t.setAttribute("font-size", "10"); t.setAttribute("font-weight", "bold"); t.setAttribute("fill", "#93c5fd"); t.setAttribute("text-anchor", "end"); t.textContent = i + "h"; svg.appendChild(t);
    }
    let bW = Math.min((w - pL - pR) / cData.length - 20, 45); 
    cData.forEach((d, i) => {
        let x = pL + 10 + i * ((w - pL - pR) / cData.length) + (((w - pL - pR) / cData.length - bW)/2); let bH = ((d.d / 60) / hrs) * (h - pB - pT); let y = pT + (h - pB - pT) - bH;
        let r = document.createElementNS("http://www.w3.org/2000/svg", "rect"); r.setAttribute("x", x); r.setAttribute("y", y); r.setAttribute("width", bW); r.setAttribute("height", Math.max(bH, 4)); r.setAttribute("fill", "#8CA692"); r.setAttribute("rx", "8"); if(d.isSlp) r.classList.add("sleep-active"); svg.appendChild(r);
        let t = document.createElementNS("http://www.w3.org/2000/svg", "text"); t.setAttribute("x", x + bW/2); t.setAttribute("y", h - pB + 15); t.setAttribute("font-size", "11"); t.setAttribute("font-weight", "bold"); t.setAttribute("fill", "#93c5fd"); t.setAttribute("text-anchor", "middle"); t.textContent = d.start.toLocaleTimeString(getLocale(), { hour: '2-digit', minute: '2-digit' }); svg.appendChild(t);
    }); cont.appendChild(svg);
}
function deleteSleepEntry(i) { if(confirm("Löschen?")) { let c = document.getElementById('sleepChildSelect').value; sleepData[c].splice(i, 1); localStorage.setItem('request_sleep', JSON.stringify(sleepData)); renderSleepData(); renderDashboard(); } }

let audioCtx = null; let activeSoundNode = null; let currentSoundType = null;
function toggleSound(type) {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    if (activeSoundNode) { if (activeSoundNode.stop) activeSoundNode.stop(); if (activeSoundNode.disconnect) activeSoundNode.disconnect(); activeSoundNode = null; Array.from(document.querySelectorAll('.sound-btn')).forEach(b => b.classList.remove('active')); if (currentSoundType === type) { currentSoundType = null; return; } }
    currentSoundType = type; let b = document.getElementById('btn-sound-' + type); if (b) b.classList.add('active');
    let bSz = audioCtx.sampleRate * 2; let buf = audioCtx.createBuffer(1, bSz, audioCtx.sampleRate); let d = buf.getChannelData(0);
    if (type === 'noise' || type === 'hairdryer') {
        for (let i=0; i<bSz; i++) d[i] = Math.random()*2-1; let n = audioCtx.createBufferSource(); n.buffer = buf; n.loop = true;
        let f = audioCtx.createBiquadFilter(); if (type === 'hairdryer') { f.type = 'lowpass'; f.frequency.value = 400; } else f.type = 'allpass';
        let g = audioCtx.createGain(); g.gain.value = type === 'hairdryer' ? 0.8 : 0.1; n.connect(f); f.connect(g); g.connect(audioCtx.destination); n.start(); activeSoundNode = n;
    } else if (type === 'heartbeat') {
        for (let i=0; i<bSz; i++) { let t = i/audioCtx.sampleRate; d[i] = ((Math.exp(-30*t)*Math.sin(2*Math.PI*40*t)) + (t>0.25 ? Math.exp(-30*(t-0.25))*Math.sin(2*Math.PI*40*(t-0.25)):0))*2; }
        let h = audioCtx.createBufferSource(); h.buffer = buf; h.loop = true; let g = audioCtx.createGain(); g.gain.value = 1.0; h.connect(g); g.connect(audioCtx.destination); h.start(); activeSoundNode = h;
    } else if (type === 'rain') {
        for (let i=0; i<bSz; i++) d[i] = (Math.random()*2-1)*0.5; let r = audioCtx.createBufferSource(); r.buffer = buf; r.loop = true; let f = audioCtx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 800; let g = audioCtx.createGain(); g.gain.value = 0.6; r.connect(f); f.connect(g); g.connect(audioCtx.destination); r.start(); activeSoundNode = r;
    } else if (type === 'waves') {
        for (let i=0; i<bSz; i++) d[i] = Math.random()*2-1; let w = audioCtx.createBufferSource(); w.buffer = buf; w.loop = true; let f = audioCtx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 400; let g = audioCtx.createGain(); g.gain.value = 0.5; let lfo = audioCtx.createOscillator(); lfo.frequency.value = 0.1; let lg = audioCtx.createGain(); lg.gain.value = 0.5; lfo.connect(lg); lg.connect(g.gain); lfo.start(); w.connect(f); f.connect(g); g.connect(audioCtx.destination); w.start(); activeSoundNode = { stop: () => { w.stop(); lfo.stop(); }, disconnect: () => { w.disconnect(); lfo.disconnect(); g.disconnect(); } };
    }
}

// ==========================================
// WACHSTUM (GRÖSSE, GEWICHT, SCHUHGRÖSSE)
// ==========================================
function setChartMetric(metric) {
    currentGrowthMetric = metric; let tS = document.getElementById('tabSize'); let tW = document.getElementById('tabWeight');
    if (metric === 'size') { if(tS){ tS.style.background='white'; tS.style.color='var(--primary)'; tS.style.boxShadow='0 4px 10px rgba(0,0,0,0.05)'; } if(tW){ tW.style.background='transparent'; tW.style.color='var(--text-muted)'; tW.style.boxShadow='none'; } } 
    else { if(tW){ tW.style.background='white'; tW.style.color='var(--primary)'; tW.style.boxShadow='0 4px 10px rgba(0,0,0,0.05)'; } if(tS){ tS.style.background='transparent'; tS.style.color='var(--text-muted)'; tS.style.boxShadow='none'; } }
    renderGrowthData();
}

function initGrowthScreen() {
    let s = document.getElementById('growthChildSelect'); if (!s) return; s.innerHTML = ''; let bk = []; kids.forEach((k, i) => { if (isChildBorn(k)) bk.push({ k: k, i: i }); });
    if (bk.length === 0) s.innerHTML = '<option value="">-</option>'; else bk.forEach(x => { let o = document.createElement('option'); o.value = x.i; o.innerText = x.k.name; s.appendChild(o); });
    let dI = document.getElementById('growthDateInput'); if (dI) dI.valueAsDate = new Date(); setChartMetric('size'); resetGrowthForm(); renderGrowthData();
}

function resetGrowthForm() {
    ['growthDateInput'].forEach(id => { let el=document.getElementById(id); if(el) el.valueAsDate = new Date(); });
    ['growthSizeInput','growthWeightInput','growthShoeInput'].forEach(id => { let el=document.getElementById(id); if(el) el.value = ''; });
    let b = document.getElementById('growthFormButtons'); if(b) b.innerHTML = `<button onclick="saveGrowthEntry()" class="btn" id="saveGrowthBtn">${translations[currentLang]?.btn_save_measure || "Messung eintragen"}</button>`; editingGrowthIndex = null;
}

function saveGrowthEntry() {
    let s = document.getElementById('growthChildSelect'); if (!s) return; let c = s.value; if (c === "" || !kids[c]) return;
    let d = document.getElementById('growthDateInput')?.value; let sz = document.getElementById('growthSizeInput')?.value; let w = document.getElementById('growthWeightInput')?.value; let sh = document.getElementById('growthShoeInput')?.value;
    if (!d || (!sz && !w && !sh)) return;
    let entry = { date: d, size: sz||'', weight: w||'', shoe: sh||'' };
    if (!growthData[c]) growthData[c] = []; if (editingGrowthIndex !== null) growthData[c][editingGrowthIndex] = entry; else growthData[c].push(entry);
    growthData[c].sort((a, b) => new Date(a.date) - new Date(b.date)); localStorage.setItem('request_growth', JSON.stringify(growthData)); resetGrowthForm(); renderGrowthData(); renderDashboard();
}

function editGrowthEntry(i) {
    let c = document.getElementById('growthChildSelect').value; let it = growthData[c][i];
    document.getElementById('growthDateInput').value = it.date; document.getElementById('growthSizeInput').value = it.size||''; document.getElementById('growthWeightInput').value = it.weight||''; document.getElementById('growthShoeInput').value = it.shoe||'';
    editingGrowthIndex = i; document.getElementById('growthFormButtons').innerHTML = `<button onclick="saveGrowthEntry()" class="btn">Aktualisieren</button><button onclick="resetGrowthForm()" class="btn btn-secondary" style="margin-top:6px;">Abbrechen</button>`;
}

function deleteGrowthEntry(i) { if (confirm("Löschen?")) { let c = document.getElementById('growthChildSelect').value; growthData[c].splice(i, 1); localStorage.setItem('request_growth', JSON.stringify(growthData)); resetGrowthForm(); renderGrowthData(); } }

function renderGrowthData() {
    let s = document.getElementById('growthChildSelect'); if (!s) return; let c = s.value; let cont = document.getElementById('growthHistoryList'); if (!cont) return; cont.innerHTML = ''; let chartC = document.getElementById('chartContainer');
    if (c === "" || !kids[c]) { cont.innerHTML = '<p style="color:var(--text-muted); font-size:0.95rem; font-weight:600;">-</p>'; if(chartC) chartC.innerHTML=''; return; }
    let list = growthData[c]; if (!list || list.length === 0) { cont.innerHTML = '<p style="color:var(--text-muted); font-size:0.95rem; font-weight:600;">-</p>'; if(chartC) chartC.innerHTML=''; return; }
    
    list.forEach((it, i) => {
        let d = document.createElement('div'); d.style.cssText = "background:rgba(255,255,255,0.8); padding:16px; border-radius:16px; font-size:1rem; font-weight:800; display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;";
        d.innerHTML = `<div><span>📏 ${it.size?it.size+' '+appUnits.size:'-'}</span> | <span>⚖️ ${it.weight?it.weight+' '+appUnits.weight:'-'}</span> | <span>👟 ${it.shoe?it.shoe:'-'}</span><div style="margin-top:8px; font-size:0.85rem; color:var(--text-muted);">📅 ${it.date}</div></div><div><button onclick="editGrowthEntry(${i})" style="background:none; border:none; cursor:pointer; font-size:1.4rem;">✏️</button><button onclick="deleteGrowthEntry(${i})" style="background:none; border:none; cursor:pointer; font-size:1.4rem;">🗑️</button></div>`;
        cont.appendChild(d);
    });
    if(chartC) renderGrowthChart(list, chartC, kids[c]);
}

function renderGrowthChart(list, cont, kid) {
    cont.innerHTML = ''; let m = currentGrowthMetric; let w = 520, h = 360, pL = 55, pR = 25, pB = 65, pT = 40;
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"); svg.setAttribute("viewBox", `0 0 ${w} ${h}`); svg.style.width = "100%";
    let bg = document.createElementNS("http://www.w3.org/2000/svg", "rect"); bg.setAttribute("width", w); bg.setAttribute("height", h); bg.setAttribute("fill", "transparent"); svg.appendChild(bg);
    let c = m==='size'?'#8CA692':'#DDA77B'; let t = m==='size'?'Größe (cm)':'Gewicht (kg)';
    let leg = document.createElementNS("http://www.w3.org/2000/svg", "g"); leg.innerHTML = `<rect x="55" y="14" width="12" height="4" fill="${c}" rx="2"/><text x="74" y="21" font-size="12" font-weight="800" fill="#4a4a4a">${t}</text>`; svg.appendChild(leg);

    let max = m==='size'?90:15; list.forEach(i => { let v = Number(m==='size'?i.size:i.weight); if(v>max) max = Math.ceil(v/(m==='size'?10:5))*(m==='size'?10:5); });
    let minT = new Date(list[0].date).getTime(); let maxT = new Date(list[list.length-1].date).getTime();
    if (kid && kid.dateType==='et' && kid.birthDate) { let et = new Date(kid.birthDate).getTime(); if (et>maxT) maxT = et; } if (minT===maxT) maxT+=86400000;
    let getX = d => pL + ((new Date(d).getTime()-minT)/(maxT-minT))*(w-pL-pR); let getY = v => pT + (h-pB-pT) - (v/max)*(h-pB-pT);
    let s = m==='size'?10:3;
    for (let v=0; v<=max; v+=s) {
        let y = getY(v); let l = document.createElementNS("http://www.w3.org/2000/svg", "line"); l.setAttribute("x1", pL); l.setAttribute("y1", y); l.setAttribute("x2", w-pR); l.setAttribute("y2", y); l.setAttribute("stroke", "rgba(0,0,0,0.1)"); l.setAttribute("stroke-dasharray", "4,4"); svg.appendChild(l);
        let tx = document.createElementNS("http://www.w3.org/2000/svg", "text"); tx.setAttribute("x", pL-8); tx.setAttribute("y", y+4); tx.setAttribute("font-size", "11"); tx.setAttribute("font-weight", "800"); tx.setAttribute("fill", "#8e8e8e"); tx.setAttribute("text-anchor", "end"); tx.textContent = v+(m==='size'?'':''); svg.appendChild(tx);
    }
    let bT = kid && kid.birthDate ? new Date(kid.birthDate).getTime() : minT; let p3=[], p50=[], p97=[];
    list.forEach(i => {
        let tm = new Date(i.date).getTime(); let aD = Math.max(0, (tm-bT)/86400000); let x = getX(i.date);
        if (m==='size') { let b = 50+(aD/365)*25; p3.push({x:x, y:getY(b*0.92)}); p50.push({x:x, y:getY(b)}); p97.push({x:x, y:getY(b*1.08)}); } 
        else { let b = 3.4+(aD/365)*7.0; p3.push({x:x, y:getY(b*0.8)}); p50.push({x:x, y:getY(b)}); p97.push({x:x, y:getY(b*1.25)}); }
    });
    if (p50.length>1) {
        let draw = (pts, col, dsh) => { let st = pts.map((p, i) => `${i===0?'M':'L'} ${p.x} ${p.y}`).join(' '); let p = document.createElementNS("http://www.w3.org/2000/svg", "path"); p.setAttribute("d", st); p.setAttribute("fill", "none"); p.setAttribute("stroke", col); p.setAttribute("stroke-width", "2"); if(dsh) p.setAttribute("stroke-dasharray", dsh); svg.appendChild(p); };
        draw(p3, "rgba(0,0,0,0.15)", "6,6"); draw(p50, "rgba(0,0,0,0.25)", "3,3"); draw(p97, "rgba(0,0,0,0.15)", "6,6"); 
    }
    let vPts = list.filter(i => { let v = m==='size'?i.size:i.weight; return v!=="" && !isNaN(Number(v)); });
    if (vPts.length>1) { let st = vPts.map((i, idx) => `${idx===0?'M':'L'} ${getX(i.date)} ${getY(m==='size'?i.size:i.weight)}`).join(' '); let p = document.createElementNS("http://www.w3.org/2000/svg", "path"); p.setAttribute("d", st); p.setAttribute("fill", "none"); p.setAttribute("stroke", c); p.setAttribute("stroke-width", "4"); svg.appendChild(p); }
    list.forEach(i => {
        let v = Number(m==='size'?i.size:i.weight); if (!isNaN(v)&&v>0) { let cx=getX(i.date); let cy=getY(v); let ci = document.createElementNS("http://www.w3.org/2000/svg", "circle"); ci.setAttribute("cx", cx); ci.setAttribute("cy", cy); ci.setAttribute("r", "6"); ci.setAttribute("fill", c); svg.appendChild(ci); }
        let tx = document.createElementNS("http://www.w3.org/2000/svg", "text"); tx.setAttribute("x", getX(i.date)); tx.setAttribute("y", h-pB+35); tx.setAttribute("font-size", "11"); tx.setAttribute("font-weight", "800"); tx.setAttribute("fill", "#4a4a4a"); tx.setAttribute("text-anchor", "end"); tx.setAttribute("transform", `rotate(-35, ${getX(i.date)}, ${h-pB+35})`); tx.textContent = i.date.split('-').reverse().join('.'); svg.appendChild(tx);
    });
    cont.appendChild(svg);
}

// ==========================================
// ZYKLUS TRACKER
// ==========================================
function getCycleInfo() {
    let starts = [...cycleStarts].sort((a,b) => new Date(a) - new Date(b)); let avgCycle = 28; 
    if (starts.length >= 2) { let tD = 0; for(let i=1; i<starts.length; i++) { tD += (new Date(starts[i]) - new Date(starts[i-1])) / 86400000; } avgCycle = Math.round(tD / (starts.length - 1)); }
    let lastStart = starts.length > 0 ? starts[starts.length - 1] : null; let today = new Date(); today.setHours(0,0,0,0);
    let nextPeriod = null; let fertileStart = null; let fertileEnd = null; let ovulation = null; let cDay = 0;
    if (lastStart) {
        let ls = new Date(lastStart); ls.setHours(0,0,0,0); cDay = Math.floor((today - ls) / 86400000) + 1;
        nextPeriod = new Date(ls); nextPeriod.setDate(nextPeriod.getDate() + avgCycle);
        ovulation = new Date(nextPeriod); ovulation.setDate(ovulation.getDate() - 14);
        fertileStart = new Date(ovulation); fertileStart.setDate(fertileStart.getDate() - 4);
        fertileEnd = new Date(ovulation); fertileEnd.setDate(fertileEnd.getDate() + 1); 
    }
    return { starts, avgCycle, lastStart, nextPeriod, fertileStart, fertileEnd, ovulation, currentDayOfCycle: cDay };
}

function isDateInPeriod(d, i) { let t = d.getTime(); if (i.lastStart) { let s=new Date(i.lastStart).getTime(); if (t>=s && t<=s+(4*86400000)) return true; } if (i.nextPeriod) { let n=i.nextPeriod.getTime(); if (t>=n && t<=n+(4*86400000)) return true; } for (let j=0; j<i.starts.length; j++) { let st=new Date(i.starts[j]).getTime(); if (t>=st && t<=st+(4*86400000)) return true; } return false; }
function isDateFertile(d, i) { if(!i.fertileStart || !i.fertileEnd) return false; let t=d.getTime(); return (t>=i.fertileStart.getTime() && t<=i.fertileEnd.getTime()); }

function initCycleScreen() {
    let btnLog = document.getElementById('btnLogPeriod');
    if (btnLog) {
        btnLog.style.display = currentUserRole.includes('Mama') ? 'block' : 'none';
        let todayStr = new Date().toISOString().split('T')[0];
        if (cycleStarts.includes(todayStr)) { btnLog.innerText = "Aktiv"; btnLog.style.background = "rgba(255,255,255,0.8)"; btnLog.style.color = "var(--period-color)"; btnLog.style.border = "2px solid var(--period-color)"; btnLog.style.boxShadow = "none"; } 
        else { btnLog.innerText = translations[currentLang]?.btn_enter_period || "Periode eingeben"; btnLog.style.background = "var(--period-color)"; btnLog.style.color = "white"; btnLog.style.border = "none"; btnLog.style.boxShadow = "0 6px 15px rgba(226, 133, 142, 0.3)"; }
    }
    
    let info = getCycleInfo(); let slider = document.getElementById('cycleDateSlider');
    if (slider) {
        slider.innerHTML = ''; let today = new Date(); today.setHours(0,0,0,0);
        let daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']; 
        let st = new Date(today); st.setDate(st.getDate() - 7); 
        for (let i = 0; i <= 21; i++) {
            let d = new Date(st); d.setDate(d.getDate() + i); let isT = d.getTime()===today.getTime();
            let ext = isDateInPeriod(d, info) ? "period" : (isDateFertile(d, info) ? "fertile" : "");
            let div = document.createElement('div'); div.className = 'cycle-day-item';
            div.innerHTML = `<div class="cycle-day-name">${isT ? '<span style="color:var(--text-main);">+</span>' : daysOfWeek[d.getDay()]}</div><div class="cycle-day-num ${isT && !ext ? 'active' : ''} ${ext}">${d.getDate()}</div>`; slider.appendChild(div);
        }
        setTimeout(() => { slider.scrollLeft = 200; }, 100);
    }
    
    let tEl = document.getElementById('cycleStatusTitle'); let lEl = document.getElementById('cycleStatusLabel'); let icEl = document.getElementById('cycleFertilityIcon'); let sEl = document.getElementById('cycleFertilitySub');
    if (info.lastStart) {
        let t = new Date(); t.setHours(0,0,0,0);
        if (isDateInPeriod(t, info)) { if(lEl) lEl.innerText = "-"; if(tEl) { tEl.innerText = `Tag ${info.currentDayOfCycle}`; tEl.style.color = "var(--period-color)"; } } 
        else {
            let df = Math.ceil((info.nextPeriod - t) / 86400000);
            if (df > 0) { if(lEl) lEl.innerText = (translations[currentLang]?.label_period_in || "in"); if(tEl) { tEl.innerText = `${df} d`; tEl.style.color = "var(--text-main)"; } } 
            else if (df === 0) { if(lEl) lEl.innerText = "-"; if(tEl) { tEl.innerText = "Heute"; tEl.style.color = "var(--text-main)"; } } 
            else { if(lEl) lEl.innerText = "Überfällig"; if(tEl) { tEl.innerText = `${Math.abs(df)} d`; tEl.style.color = "var(--text-main)"; } }
        }
        if (isDateFertile(t, info)) { if(icEl) icEl.innerText = "✨"; if(sEl) { sEl.innerText = "Hoch"; sEl.style.color = "var(--fertile-color)"; } } 
        else if (isDateInPeriod(t, info)) { if(icEl) icEl.innerText = "💧"; if(sEl) { sEl.innerText = "-"; sEl.style.color = "var(--text-muted)"; } } 
        else { if(icEl) icEl.innerText = "⚪"; if(sEl) { sEl.innerText = "Gering"; sEl.style.color = "var(--text-muted)"; } }
    } else { if(lEl) lEl.innerText = "-"; if(tEl) { tEl.innerText = "--"; tEl.style.color = "var(--text-muted)"; } }
    renderCycleHistory(info); renderCycleChart(info);
}

function togglePeriodLog() { if (!currentUserRole.includes('Mama')) return; let t = new Date().toISOString().split('T')[0]; let i = cycleStarts.indexOf(t); if (i > -1) cycleStarts.splice(i, 1); else cycleStarts.push(t); localStorage.setItem('request_cycleStarts', JSON.stringify(cycleStarts)); initCycleScreen(); }

function renderCycleHistory(info) {
    let c = document.getElementById('cycleHistoryList'); if (!c) return; c.innerHTML = '';
    if (info.starts.length === 0) { c.innerHTML = '<p style="font-size:0.95rem; font-weight:600; color:var(--text-muted); margin:0;">-</p>'; return; }
    let rev = [...info.starts].reverse();
    rev.forEach((st, idx) => {
        let lTx = "-"; let dTx = new Date(st).toLocaleDateString(getLocale());
        if (idx === 0) { lTx = `${info.currentDayOfCycle} d`; } else { let diff = Math.round((new Date(rev[idx-1]) - new Date(st)) / 86400000); lTx = `${diff} d`; }
        let d = document.createElement('div'); d.style.cssText = "border-bottom: 2px solid rgba(0,0,0,0.05); padding-bottom: 16px;";
        let h = ""; let tD = idx === 0 ? Math.min(28, info.currentDayOfCycle) : Math.min(28, parseInt(lTx));
        for(let i=1; i<=tD; i++) { if(i<=5) h+=`<span class="cycle-dot dot-period"></span>`; else if(i>=11 && i<=15) h+=`<span class="cycle-dot dot-fertile"></span>`; else h+=`<span class="cycle-dot dot-normal"></span>`; }
        d.innerHTML = `<div style="font-weight: 800; color: var(--text-main); font-size: 1.1rem; margin-bottom: 6px;">${lTx}</div><div style="font-size: 0.9rem; font-weight:600; color: var(--text-muted); margin-bottom: 10px;">${dTx}</div><div style="display:flex; gap:3px; flex-wrap:wrap; max-width: 100%;">${h}</div>`; c.appendChild(d);
    });
}

function renderCycleChart(info) {
    let c = document.getElementById('cycleChartContainer'); if (!c) return; c.innerHTML = '';
    if (info.starts.length < 2) { c.innerHTML = '<p style="font-size:0.95rem; font-weight:600; color:var(--text-muted); text-align:center;">-</p>'; return; }
    let cd = []; for (let i=0; i<info.starts.length-1; i++) cd.push({ m: new Date(info.starts[i]).toLocaleDateString(getLocale(), {month:'short'}), l: Math.round((new Date(info.starts[i+1]) - new Date(info.starts[i])) / 86400000) });
    if(cd.length > 6) cd = cd.slice(cd.length - 6);
    let w = 500, h = 150, pL = 20, pR = 20, pB = 30, pT = 20;
    let s = document.createElementNS("http://www.w3.org/2000/svg", "svg"); s.setAttribute("viewBox", `0 0 ${w} ${h}`); s.style.width = "100%";
    let gY = v => pT + (h-pB-pT) - ((v-20)/20)*(h-pB-pT); let gX = i => pL+20+i*((w-pL-pR-40)/Math.max(1, cd.length-1));
    let nZ = document.createElementNS("http://www.w3.org/2000/svg", "rect"); nZ.setAttribute("x", pL); nZ.setAttribute("y", gY(32)); nZ.setAttribute("width", w-pL-pR); nZ.setAttribute("height", gY(24)-gY(32)); nZ.setAttribute("fill", "rgba(255,255,255,0.5)"); nZ.setAttribute("rx", "8"); s.appendChild(nZ);
    if (cd.length > 1) { let pS = cd.map((d, i) => `${i===0?'M':'L'} ${gX(i)} ${gY(d.l)}`).join(' '); let p = document.createElementNS("http://www.w3.org/2000/svg", "path"); p.setAttribute("d", pS); p.setAttribute("fill", "none"); p.setAttribute("stroke", "var(--primary)"); p.setAttribute("stroke-width", "4"); s.appendChild(p); }
    cd.forEach((d, i) => {
        let ab = d.l<24 || d.l>32; let x=gX(i); let y=gY(d.l);
        let ci = document.createElementNS("http://www.w3.org/2000/svg", "circle"); ci.setAttribute("cx", x); ci.setAttribute("cy", y); ci.setAttribute("r", "6"); ci.setAttribute("fill", ab?"var(--accent-gold)":"var(--primary)"); ci.setAttribute("stroke", "white"); ci.setAttribute("stroke-width", "3"); s.appendChild(ci);
        let tx = document.createElementNS("http://www.w3.org/2000/svg", "text"); tx.setAttribute("x", x); tx.setAttribute("y", h-5); tx.setAttribute("font-size", "12"); tx.setAttribute("font-weight", "800"); tx.setAttribute("fill", "var(--text-muted)"); tx.setAttribute("text-anchor", "middle"); tx.textContent = d.m; s.appendChild(tx);
    });
    c.appendChild(s);
}

// ==========================================
// SCHWANGERSCHAFT & UNTERSUCHUNGEN
// ==========================================
function setPregChartMetric(metric) {
    currentPregMetric = metric; let tS = document.getElementById('tabPregSize'); let tW = document.getElementById('tabPregWeight');
    if (metric === 'size') { if (tS) { tS.style.background = 'white'; tS.style.color = 'var(--primary)'; tS.style.boxShadow = '0 4px 10px rgba(0,0,0,0.05)'; } if (tW) { tW.style.background = 'transparent'; tW.style.color = 'var(--text-muted)'; tW.style.boxShadow = 'none'; } } 
    else { if (tW) { tW.style.background = 'white'; tW.style.color = 'var(--primary)'; tW.style.boxShadow = '0 4px 10px rgba(0,0,0,0.05)'; } if (tS) { tS.style.background = 'transparent'; tS.style.color = 'var(--text-muted)'; tS.style.boxShadow = 'none'; } }
    renderPregnancyData();
}

function initPregnancyScreen() {
    let select = document.getElementById('pregChildSelect'); if (!select) return; select.innerHTML = '';
    kids.forEach((k, idx) => { let opt = document.createElement('option'); opt.value = idx; opt.innerText = k.name; select.appendChild(opt); });
    if (kids.length === 0) select.innerHTML = '<option>-</option>';
    let dateInput = document.getElementById('pregDateInput'); if (dateInput) dateInput.valueAsDate = new Date();
    currentPregMetric = 'size'; setPregChartMetric('size'); resetPregnancyForm(); renderPregnancyData();
}

function resetPregnancyForm() {
    let dateInput = document.getElementById('pregDateInput'); if (dateInput) dateInput.valueAsDate = new Date();
    ['pregSizeInput','pregWeightInput','pregNoteInput','pregMediaInput'].forEach(id=>{let el=document.getElementById(id); if(el) el.value='';});
    let btnBox = document.getElementById('pregFormButtons'); if (btnBox) btnBox.innerHTML = `<button onclick="savePregnancyEntry()" class="btn" id="savePregBtn">${translations[currentLang]?.btn_save_exam||'Speichern'}</button>`; editingPregIndex = null;
}

async function savePregnancyEntry() {
    let select = document.getElementById('pregChildSelect'); if (!select) return; let cI = select.value; 
    let fInp = document.getElementById('pregMediaInput'); let files = fInp ? fInp.files : []; let mA = [];
    if (files.length > 0) { for (let f of files) mA.push(await readFileAsDataURL(f)); } else if (editingPregIndex !== null && pregnancyData[cI] && pregnancyData[cI][editingPregIndex]) { mA = pregnancyData[cI][editingPregIndex].media || []; }
    let dInp = document.getElementById('pregDateInput'); let sInp = document.getElementById('pregSizeInput'); let wInp = document.getElementById('pregWeightInput'); let nInp = document.getElementById('pregNoteInput');
    let e = { date: dInp ? dInp.value : '', size: sInp ? sInp.value : '', weight: wInp ? wInp.value : '', note: nInp ? nInp.value : '', media: mA };
    if (!e.date) return;
    if (!pregnancyData[cI]) pregnancyData[cI] = []; if (editingPregIndex !== null) pregnancyData[cI][editingPregIndex] = e; else pregnancyData[cI].push(e);
    pregnancyData[cI].sort((a, b) => new Date(a.date) - new Date(b.date)); localStorage.setItem('request_pregnancy', JSON.stringify(pregnancyData)); resetPregnancyForm(); renderPregnancyData();
}

function renderPregnancyData() {
    let sel = document.getElementById('pregChildSelect'); if (!sel) return; let cI = sel.value; 
    let hC = document.getElementById('pregHistoryList'); let gC = document.getElementById('pregGalleryGrid');
    let wT = document.getElementById('pregWidgetTitle'); let wD = document.getElementById('pregWidgetDetails');
    if (hC) hC.innerHTML = ''; if (gC) gC.innerHTML = '';
    
    let list = pregnancyData[cI] || []; let kid = kids[cI];
    if (kid && kid.birthDate) {
        if (isChildBorn(kid)) {
            if (wT) wT.innerText = "🥳"; if (wD) wD.innerHTML = `<b>${calculateAgeString(kid.birthDate)}</b>`; 
            let sc = document.getElementById('ssw-size-card'); if (sc) sc.style.display = 'none';
        } else {
            let df = Math.ceil((new Date(kid.birthDate) - new Date()) / 86400000); let wk = Math.max(1, Math.min(40, Math.floor((266 - df) / 7) + 1));
            if (wT) wT.innerText = `SSW ${wk}`; if (wD) wD.innerHTML = `<b>${Math.max(0, df)} d</b>`; 
            let sc = document.getElementById('ssw-size-card'); if (sc) sc.style.display = 'block';
            let cT = document.getElementById('comparisonTypeSelect'); let ctVal = cT ? cT.value : 'fruit';
            let inf = (ctVal === 'animal' ? sswAnimalData : sswFruitData)[wk] || { fruit: "-", animal: "-", emoji: "👶" };
            let eI = document.getElementById('ssw-fruit-emoji'); if (eI) eI.innerText = inf.emoji;
            let tI = document.getElementById('ssw-fruit-title'); if (tI) tI.innerText = `${ctVal === 'animal' ? inf.animal : inf.fruit}`;
        }
    } else { if (wT) wT.innerText = "-"; if (wD) wD.innerText = "-"; let sc = document.getElementById('ssw-size-card'); if (sc) sc.style.display = 'none'; }

    if (list.length === 0) {
        if (hC) hC.innerHTML = '<p style="font-size:0.95rem; font-weight:600; color:var(--text-muted);">-</p>'; 
        if (gC) gC.innerHTML = '<p style="font-size:0.95rem; font-weight:600; color:var(--text-muted); grid-column:span 2;">-</p>';
    } else {
        list.forEach((it, i) => {
            let d = document.createElement('div'); d.style.cssText = "background:rgba(255,255,255,0.8); padding:16px; border-radius:16px; font-size:1rem; font-weight:800; margin-bottom:10px;";
            d.innerHTML = `<div style="display:flex; justify-content:space-between; margin-bottom:6px;"><span>📅 ${it.date}</span><div><button onclick="editPregEntry(${i})" style="background:none; border:none; cursor:pointer; font-size:1.2rem;">✏️</button><button onclick="deletePregEntry(${i})" style="background:none; border:none; cursor:pointer; font-size:1.2rem;">🗑️</button></div></div><div style="font-size:0.9rem; color:var(--text-main);">📏 ${it.size ? it.size+' '+appUnits.size : '-'} | ⚖️ ${it.weight ? it.weight+' '+appUnits.weight : '-'}</div>${it.note ? '<div style="margin-top:6px; color:var(--text-muted); font-size:0.9rem; font-weight:600;">' + it.note + '</div>' : ''}`;
            if (hC) hC.appendChild(d);
            if (it.media && it.media.length > 0) { it.media.forEach(s => { let img = document.createElement('img'); img.src = s; img.style.cssText = "width:100%; height:120px; object-fit:cover; border-radius:12px;"; if (gC) gC.appendChild(img); }); }
        });
    }
    let cC = document.getElementById('pregChartContainer'); if (cC) renderPregnancyChart(list, cC, kid);
}

function renderPregnancyChart(list, cont, kid) {
    cont.innerHTML = ''; let m = currentPregMetric;
    let vPts = list.filter(i => { let v = m === 'size' ? i.size : i.weight; return v !== "" && !isNaN(Number(v)) && Number(v) >= 0; });
    if (vPts.length === 0) { cont.innerHTML = '<p style="font-size:0.95rem; font-weight:600; color:var(--text-muted);">-</p>'; return; }

    let w = 520, h = 300, pL = 55, pR = 25, pB = 65, pT = 40; 
    let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg"); svg.setAttribute("viewBox", `0 0 ${w} ${h}`); svg.style.width = "100%";
    let tCol = m === 'size' ? 'var(--primary)' : 'var(--accent-gold)'; let tTxt = m === 'size' ? 'Größe (cm)' : 'Gewicht (kg)';
    let lG = document.createElementNS("http://www.w3.org/2000/svg", "g"); lG.innerHTML = `<rect x="55" y="14" width="12" height="4" fill="${tCol}" rx="2"/><text x="74" y="21" font-size="12" font-weight="800" fill="var(--text-main)">${tTxt}</text>`; svg.appendChild(lG);

    let maxV = m === 'size' ? 55 : 4.5;
    vPts.forEach(i => { let v = Number(m === 'size' ? i.size : i.weight); if(v > maxV) maxV = Math.ceil(v / (m === 'size' ? 5 : 1)) * (m === 'size' ? 5 : 1); });

    let minT = new Date(vPts[0].date).getTime(); let maxT = new Date(vPts[vPts.length - 1].date).getTime();
    let ovT = minT;
    if (kid && kid.dateType === 'et' && kid.birthDate) { let et = new Date(kid.birthDate).getTime(); if (et > maxT) maxT = et; ovT = et - (266 * 86400000); }
    if (minT === maxT) maxT += 86400000;

    let getX = d => pL + ((new Date(d).getTime() - minT) / (maxT - minT)) * (w - pL - pR);
    let getY = v => pT + (h - pB - pT) - (Number(v) / maxV) * (h - pB - pT);

    let step = m === 'size' ? 10 : 1;
    for (let v = 0; v <= maxV; v += step) {
        let y = getY(v); let ln = document.createElementNS("http://www.w3.org/2000/svg", "line"); ln.setAttribute("x1", pL); ln.setAttribute("y1", y); ln.setAttribute("x2", w - pR); ln.setAttribute("y2", y); ln.setAttribute("stroke", "rgba(0,0,0,0.1)"); ln.setAttribute("stroke-dasharray", "4,4"); svg.appendChild(ln);
        let txt = document.createElementNS("http://www.w3.org/2000/svg", "text"); txt.setAttribute("x", pL - 8); txt.setAttribute("y", y + 4); txt.setAttribute("font-size", "11"); txt.setAttribute("font-weight", "800"); txt.setAttribute("fill", "var(--text-muted)"); txt.setAttribute("text-anchor", "end"); txt.textContent = v; svg.appendChild(txt);
    }

    let p3 = [], p50 = [], p97 = []; let tSt = (maxT - minT) / 20; if(tSt === 0) tSt = 86400000;
    for (let t = minT; t <= maxT; t += tSt) {
        let aD = Math.max(0, (t - ovT) / 86400000); let prog = Math.min(1, aD / 266); let x = pL + ((t - minT) / (maxT - minT)) * (w - pL - pR);
        if (m === 'size') { let b = 51 * prog; p3.push({x: x, y: getY(b * 0.85)}); p50.push({x: x, y: getY(b)}); p97.push({x: x, y: getY(b * 1.15)}); } 
        else { let b = 3.4 * Math.pow(prog, 3); p3.push({x: x, y: getY(b * 0.75)}); p50.push({x: x, y: getY(b)}); p97.push({x: x, y: getY(b * 1.30)}); }
    }

    if (p50.length > 1) {
        let dC = (pts, c, ds) => { let s = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' '); let pa = document.createElementNS("http://www.w3.org/2000/svg", "path"); pa.setAttribute("d", s); pa.setAttribute("fill", "none"); pa.setAttribute("stroke", c); pa.setAttribute("stroke-width", "2"); if(ds) pa.setAttribute("stroke-dasharray", ds); svg.appendChild(pa); };
        dC(p3, "rgba(0,0,0,0.15)", "6,6"); dC(p50, "rgba(0,0,0,0.25)", "3,3"); dC(p97, "rgba(0,0,0,0.15)", "6,6"); 
    }

    if (vPts.length > 1) { let pS = vPts.map((i, id) => `${id === 0 ? 'M' : 'L'} ${getX(i.date)} ${getY(m === 'size' ? i.size : i.weight)}`).join(' '); let pa = document.createElementNS("http://www.w3.org/2000/svg", "path"); pa.setAttribute("d", pS); pa.setAttribute("fill", "none"); pa.setAttribute("stroke", tCol); pa.setAttribute("stroke-width", "4"); svg.appendChild(pa); }

    vPts.forEach(i => {
        let v = Number(m === 'size' ? i.size : i.weight); let x = getX(i.date); let y = getY(v);
        let ci = document.createElementNS("http://www.w3.org/2000/svg", "circle"); ci.setAttribute("cx", x); ci.setAttribute("cy", y); ci.setAttribute("r", "6"); ci.setAttribute("fill", tCol); svg.appendChild(ci);
    });
    cont.appendChild(svg);
}

function editPregEntry(idx) { let sel = document.getElementById('pregChildSelect'); if (!sel) return; let it = pregnancyData[sel.value][idx]; document.getElementById('pregDateInput').value = it.date; document.getElementById('pregSizeInput').value = it.size || ''; document.getElementById('pregWeightInput').value = it.weight || ''; document.getElementById('pregNoteInput').value = it.note || ''; editingPregIndex = idx; document.getElementById('pregFormButtons').innerHTML = `<button onclick="savePregnancyEntry()" class="btn">Aktualisieren</button><button onclick="resetPregnancyForm()" class="btn btn-secondary" style="margin-top:6px;">Abbrechen</button>`; }
function deletePregEntry(idx) { if (confirm("Löschen?")) { let sel = document.getElementById('pregChildSelect'); if (!sel) return; pregnancyData[sel.value].splice(idx, 1); localStorage.setItem('request_pregnancy', JSON.stringify(pregnancyData)); resetPregnancyForm(); renderPregnancyData(); } }

// ==========================================
// WISHLIST
// ==========================================
function initWishlistScreen() { let s = document.getElementById('wishChildSelect'); if (!s) return; s.innerHTML = ''; kids.forEach((k, i) => { if (!isKidVisible(i)) return; let o = document.createElement('option'); o.value = i; o.innerText = k.name; s.appendChild(o); }); if (kids.length === 0) s.innerHTML = '<option>-</option>'; resetWishForm(); renderWishlist(); }
function resetWishForm() { ['wishTitleInput','wishOccasionInput','wishLinkInput'].forEach(id => { let e=document.getElementById(id); if(e) e.value=''; }); let b = document.getElementById('wishFormButtons'); if (b) b.innerHTML = `<button onclick="saveWishItem()" class="btn">${translations[currentLang]?.btn_add_wish||'Hinzufügen'}</button>`; editingWishIndex = null; }
function saveWishItem() {
    let s = document.getElementById('wishChildSelect'); if (!s) return; let ci = s.value; 
    let t = document.getElementById('wishTitleInput')?.value.trim() || ''; let l = document.getElementById('wishLinkInput')?.value.trim() || ''; let o = document.getElementById('wishOccasionInput')?.value.trim() || '';
    if (!t) return; if (l && !l.startsWith('http://') && !l.startsWith('https://')) l = 'https://' + l;
    let item = { title: t, occasion: o, link: l, done: (editingWishIndex !== null && wishlistData[ci] && wishlistData[ci][editingWishIndex]) ? wishlistData[ci][editingWishIndex].done : false };
    if (!wishlistData[ci]) wishlistData[ci] = []; if (editingWishIndex !== null) wishlistData[ci][editingWishIndex] = item; else wishlistData[ci].push(item);
    localStorage.setItem('request_wishlist', JSON.stringify(wishlistData)); resetWishForm(); renderWishlist();
}
function editWishItem(i) { let s = document.getElementById('wishChildSelect'); if (!s) return; let it = wishlistData[s.value][i]; document.getElementById('wishTitleInput').value = it.title || ''; document.getElementById('wishOccasionInput').value = it.occasion || ''; document.getElementById('wishLinkInput').value = it.link || ''; editingWishIndex = i; document.getElementById('wishFormButtons').innerHTML = `<button onclick="saveWishItem()" class="btn">Aktualisieren</button><button onclick="resetWishForm()" class="btn btn-secondary" style="margin-top:6px;">Abbrechen</button>`; }
function toggleWishItem(i) { let s = document.getElementById('wishChildSelect'); if (!s) return; wishlistData[s.value][i].done = !wishlistData[s.value][i].done; localStorage.setItem('request_wishlist', JSON.stringify(wishlistData)); renderWishlist(); }
function deleteWishItem(i) { if (confirm("Löschen?")) { let s = document.getElementById('wishChildSelect'); if (!s) return; wishlistData[s.value].splice(i, 1); localStorage.setItem('request_wishlist', JSON.stringify(wishlistData)); resetWishForm(); renderWishlist(); } }
function renderWishlist() {
    let s = document.getElementById('wishChildSelect'); if (!s) return; let ci = s.value; let c = document.getElementById('wishlistContainer'); if (!c) return; c.innerHTML = ''; let list = wishlistData[ci] || [];
    if (list.length === 0) { c.innerHTML = '<p style="font-size:0.95rem; font-weight:600; color:var(--text-muted);">-</p>'; return; }
    list.forEach((it, i) => {
        let d = document.createElement('div'); d.style.cssText = `background:rgba(255,255,255,0.8); padding:16px; border-radius:16px; font-size:1rem; display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; ${it.done ? 'opacity:0.6;' : ''}`;
        let u = it.link; if (u && !u.startsWith('http://') && !u.startsWith('https://')) u = 'https://' + u;
        let lH = u ? `<a href="${u}" target="_blank" style="color:var(--primary); font-weight:800;">🔗 Link</a>` : ''; let oH = it.occasion ? `<div style="font-size:0.85rem; color:var(--text-muted); font-weight:600;">${it.occasion}</div>` : '';
        d.innerHTML = `<div style="flex-grow:1;"><div style="display:flex; gap:12px; align-items:center;"><input type="checkbox" ${it.done ? 'checked' : ''} onchange="toggleWishItem(${i})" style="width:20px;height:20px; accent-color:var(--primary);"><span style="${it.done ? 'text-decoration:line-through;' : ''} font-weight:800;">${it.title}</span></div><div style="padding-left:32px; margin-top:4px;">${oH}${lH}</div></div><div style="display:flex; gap:6px;"><button onclick="editWishItem(${i})" style="background:none; border:none; cursor:pointer; font-size:1.4rem;">✏️</button><button onclick="deleteWishItem(${i})" style="background:none; border:none; cursor:pointer; font-size:1.4rem;">🗑️</button></div>`; c.appendChild(d);
    });
}

// ==========================================
// KALENDER & POSTS
// ==========================================
function toggleCalendar() { isCalendarExpanded = !isCalendarExpanded; let c = document.getElementById('calendarContainer'); if (c) c.style.display = isCalendarExpanded ? 'block' : 'none'; let b = document.getElementById('calendarToggleBtn'); if (b) b.innerText = isCalendarExpanded ? (translations[currentLang]?.btn_collapse||'Einklappen') : '📅'; }
function renderCalendar() {
    let g = document.getElementById('calendarGrid'); if (!g) return; g.innerHTML = ''; let n = new Date(); let t = document.getElementById('currentMonthTitle'); 
    if (t) t.innerText = n.toLocaleDateString(getLocale(), { month: 'long', year: 'numeric' });
    let dim = new Date(n.getFullYear(), n.getMonth() + 1, 0).getDate();
    for (let i = 1; i <= dim; i++) {
        let c = document.createElement('div'); c.className = 'calendar-day'; c.innerText = i;
        if (i === n.getDate()) c.classList.add('today'); if (allPosts[i] && allPosts[i].some(p => isKidVisible(p.childIndex))) c.classList.add('has-post');
        c.onclick = () => onCalendarDayClick(i); g.appendChild(c);
    }
}

function onCalendarDayClick(day) { 
    selectedDayForModal = day; let p = allPosts[day]; 
    if (p && p.some(x => isKidVisible(x.childIndex))) { let l = p.map(x => isKidVisible(x.childIndex)).lastIndexOf(true); openViewPostModal(day, p[l].childIndex, l); } 
    else { openDayModal(day); } 
}

function openDayModal(day, ptI = null) {
    selectedDayForModal = day; editingPostIndex = ptI;
    let t = document.getElementById('modalDayTitle'); if(t) t.innerText = ptI !== null ? (translations[currentLang]?.btn_edit||"Bearbeiten") : (translations[currentLang]?.btn_new_post||"Erstellen");
    let b = document.getElementById('savePostBtn'); if(b) b.innerText = ptI !== null ? (translations[currentLang]?.btn_save||"Speichern") : (translations[currentLang]?.btn_save||"Speichern");
    let a = document.getElementById('postAuthorInput'); if (a) a.value = currentUserRole;
    let d = document.getElementById('postDateInput'); if (d) { let n = new Date(); d.value = `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`; }
    let no = document.getElementById('dayNoteInput'); if (no) { if (ptI !== null && allPosts[day] && allPosts[day][ptI]) { no.value = allPosts[day][ptI].text || ''; } else { no.value = ''; } }
    let m = document.getElementById('dayMediaInput'); if (m) m.value = '';
    
    let s = document.getElementById('postChildSelect'); 
    if (s) {
        s.innerHTML = kids.length === 0 ? '<option>-</option>' : ''; 
        kids.forEach((k, i) => { 
            if (!isKidVisible(i)) return; 
            let o = document.createElement('option'); o.value = i; o.innerText = k.name; 
            if (ptI !== null && allPosts[day][ptI].childIndex === i) o.selected = true; 
            s.appendChild(o); 
        });
    }
    
    let msCheck = document.getElementById('postIsMilestone'); 
    if (msCheck) { 
        if (ptI !== null && allPosts[day] && allPosts[day][ptI]) { msCheck.checked = allPosts[day][ptI].isMilestone || false; } 
        else { msCheck.checked = false; } 
    }
    
    renderSavedPostsForModal(); 
    let md = document.getElementById('dayModal'); if (md) md.style.display = 'flex';
}

function closeDayModal() { let md = document.getElementById('dayModal'); if (md) md.style.display = 'none'; }

function openViewPostModal(day, cI, ptI = null) {
    selectedDayForModal = day; let ps = allPosts[day]; if (!ps || ps.length === 0) return;
    let tI = ptI !== null ? ptI : ps.findIndex(p => p.childIndex === cI); if (tI === -1) tI = ps.length - 1; viewingPostIndex = tI; let po = ps[tI];
    let n = new Date(); let t = document.getElementById('viewPostTitle'); if (t) t.innerText = `${String(day).padStart(2, '0')}.${String(n.getMonth() + 1).padStart(2, '0')}.${n.getFullYear()}`;
    let c = document.getElementById('viewPostContent');
    if (c) {
        let msIcon = po.isMilestone ? '🏆 ' : '';
        c.innerHTML = `<div style="font-weight: 800; font-size:1.1rem; color: var(--primary); margin-bottom: 8px;">${msIcon}${po.author} für ${kids[po.childIndex]?.name||'Kind'}:</div><div style="margin-bottom: 16px; font-size:1.05rem; font-weight:600;">${po.text || ''}</div>`;
        if (po.media && po.media.length > 0) { let mW = document.createElement('div'); mW.style.cssText = "display: flex; flex-direction: column; gap: 12px; margin-top: 12px;"; po.media.forEach(m => { let s = (typeof m === 'string') ? m : m.url; let iV = (typeof m === 'object' && m.type === 'video') || s.includes('video'); let el = iV ? document.createElement('video') : document.createElement('img'); el.src = s; if (iV) el.controls = true; el.style.cssText = "width: 100%; max-height: 300px; border-radius: 16px; object-fit: cover;"; mW.appendChild(el); }); c.appendChild(mW); }
    }
    let vM = document.getElementById('viewPostModal'); if (vM) vM.style.display = 'flex';
}

function closeViewPostModal() { let vM = document.getElementById('viewPostModal'); if (vM) vM.style.display = 'none'; }
function editCurrentViewPost() { closeViewPostModal(); openDayModal(selectedDayForModal, viewingPostIndex); }
function deleteCurrentViewPost() { if (confirm("Löschen?")) { allPosts[selectedDayForModal].splice(viewingPostIndex, 1); if (allPosts[selectedDayForModal].length === 0) delete allPosts[selectedDayForModal]; localStorage.setItem('request_posts', JSON.stringify(allPosts)); closeViewPostModal(); renderCalendar(); renderDashboard(); renderPostsScreen(); } }
function deletePostFromModal(day, idx) { if (confirm("Löschen?")) { allPosts[day].splice(idx, 1); if (allPosts[day].length === 0) delete allPosts[day]; localStorage.setItem('request_posts', JSON.stringify(allPosts)); renderCalendar(); renderDashboard(); renderPostsScreen(); renderSavedPostsForModal(); if (!allPosts[day] || allPosts[day].length === 0) closeDayModal(); } }

async function saveDayPost() {
    let tI = document.getElementById('dayNoteInput'); let tx = tI ? tI.value : ''; 
    let fI = document.getElementById('dayMediaInput'); let fl = fI ? fI.files : []; 
    let dI = document.getElementById('postDateInput'); let dS = dI ? dI.value : null;
    
    if (!tx.trim() && fl.length === 0 && editingPostIndex === null) return;
    
    let tD = selectedDayForModal; if (dS) tD = parseInt(dS.split('-')[2], 10);
    let mA = []; 
    if (fl.length > 0) { 
        for (let f of fl) { let dU = await readFileAsDataURL(f); mA.push({ url: dU, type: f.type.startsWith('video') ? 'video' : 'image' }); } 
    } else if (editingPostIndex !== null && allPosts[selectedDayForModal] && allPosts[selectedDayForModal][editingPostIndex]) { 
        mA = allPosts[selectedDayForModal][editingPostIndex].media || []; 
    }
    
    let cS = document.getElementById('postChildSelect'); 
    let msCheck = document.getElementById('postIsMilestone');
    let isMs = msCheck ? msCheck.checked : false;
    let pO = { author: currentUserRole, childIndex: cS ? Number(cS.value) : 0, text: tx, media: mA, isMilestone: isMs };
    
    if (editingPostIndex !== null && tD !== selectedDayForModal) { allPosts[selectedDayForModal].splice(editingPostIndex, 1); if (allPosts[selectedDayForModal].length === 0) delete allPosts[selectedDayForModal]; editingPostIndex = null; }
    if (!allPosts[tD]) allPosts[tD] = []; 
    if (editingPostIndex !== null && tD === selectedDayForModal) { allPosts[tD][editingPostIndex] = pO; } else { allPosts[tD].push(pO); }
    
    localStorage.setItem('request_posts', JSON.stringify(allPosts)); 
    renderCalendar(); renderDashboard(); renderPostsScreen(); closeDayModal();
}

function renderSavedPostsForModal() { let c = document.getElementById('savedPostsList'); if (!c) return; c.innerHTML = ''; let ps = allPosts[selectedDayForModal]; if (ps && ps.length > 0) { let vP = ps.map((p, idx) => ({post: p, index: idx})).filter(i => isKidVisible(i.post.childIndex)); if (vP.length > 0) { c.innerHTML = ''; vP.forEach(i => { let d = document.createElement('div'); d.style.cssText = "background:rgba(255,255,255,0.5); padding:12px; border-radius:12px; margin-top:8px; font-size:0.9rem; font-weight:600; display:flex; justify-content:space-between; align-items:center;"; d.innerHTML = `<div><b style="color:var(--primary);">${i.post.author}:</b> ${i.post.text || ''}</div><div style="display:flex; gap:6px;"><button onclick="openDayModal(${selectedDayForModal}, ${i.index})" style="background:none; border:none; cursor:pointer; font-size:1.2rem;">✏️</button><button onclick="deletePostFromModal(${selectedDayForModal}, ${i.index})" style="background:none; border:none; cursor:pointer; font-size:1.2rem;">🗑️</button></div>`; c.appendChild(d); }); } } }

// ==========================================
// GALERIE & STATS
// ==========================================
function renderGallery() { let c = document.getElementById('fullGalleryGrid'); if (!c) return; c.innerHTML = ''; let mL = []; Object.keys(allPosts).forEach(d => { if (allPosts[d]) { allPosts[d].forEach(p => { if (isKidVisible(p.childIndex) && p.media) { p.media.forEach(m => mL.push({ day: d, media: m })); } }); } }); if (mL.length === 0) { c.innerHTML = '<p style="color:var(--text-muted); font-size:0.95rem; font-weight:600;">-</p>'; return; } mL.forEach(i => { let s = (typeof i.media === 'string') ? i.media : i.media.url; let b = document.createElement('div'); b.style.cssText = "background:rgba(255,255,255,0.8); border-radius:16px; overflow:hidden; box-shadow:0 4px 10px rgba(0,0,0,0.05);"; b.innerHTML = `<img src="${s}" style="width:100%; height:140px; object-fit:cover;"><div style="padding:10px; font-size:0.85rem; font-weight:800; color:var(--text-muted);">${i.day}</div>`; c.appendChild(b); }); }
function renderStats() { let c = document.getElementById('statsContent'); if (!c) return; c.innerHTML = ''; let tP = 0, tI = 0, tV = 0; Object.keys(allPosts).forEach(d => { if (allPosts[d]) { allPosts[d].forEach(p => { if (!isKidVisible(p.childIndex)) return; tP++; if (p.media) { p.media.forEach(m => { let s = (typeof m === 'string') ? m : m.url; if ((typeof m === 'object' && m.type === 'video') || s.includes('video')) { tV++; } else { tI++; } }); } }); } }); c.innerHTML = `<div style="background:rgba(255,255,255,0.8); padding:16px; border-radius:16px; display:flex; justify-content:space-between; align-items:center;"><span>📝 Posts</span><b style="font-size:1.4rem; color:var(--primary);">${tP}</b></div><div style="background:rgba(255,255,255,0.8); padding:16px; border-radius:16px; display:flex; justify-content:space-between; align-items:center; margin-top:12px;"><span>🖼️ Images</span><b style="font-size:1.4rem; color:var(--primary);">${tI}</b></div><div style="background:rgba(255,255,255,0.8); padding:16px; border-radius:16px; display:flex; justify-content:space-between; align-items:center; margin-top:12px;"><span>🎥 Videos</span><b style="font-size:1.4rem; color:var(--primary);">${tV}</b></div>`; }

// ==========================================
// SHARE & MEMORY GAME
// ==========================================
function openShareModal() { let m = document.getElementById('shareAppModal'); if (m) m.style.display = 'flex'; }
function closeShareModal() { let m = document.getElementById('shareAppModal'); if (m) m.style.display = 'none'; }
function generateReferralCode() { let c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; let r = ''; for (let i = 0; i < 12; i++) r += c.charAt(Math.floor(Math.random() * c.length)); return r; }
function shareAppViaWhatsApp(t) { let r = generateReferralCode(); let f = appSettings.familyId; let tx = ""; if (t === 'partner') tx = encodeURIComponent(`https://deine-app-domain.de/join/${f}`); else if (t === 'family') tx = encodeURIComponent(`https://deine-app-domain.de/guest/${f}`); else if (t === 'referral') tx = encodeURIComponent(`https://deine-app-domain.de/invite`); window.location.href = `whatsapp://send?text=${tx}`; setTimeout(() => { window.open(`https://wa.me/?text=${tx}`, '_blank'); }, 300); closeShareModal(); }

let memoryCards = []; let flippedCards = []; let matchedPairs = 0; let memoryAttempts = 0; let lockBoard = false;
function initMemoryScreen() {
    let p = document.getElementById('memoryPreGame'); let g = document.getElementById('memoryGameArea'); let grid = document.getElementById('memoryGrid'); if (!p || !g || !grid) return;
    let aI = []; Object.keys(allPosts).forEach(d => { if (allPosts[d]) { allPosts[d].forEach(pt => { if (isKidVisible(pt.childIndex) && pt.media) { pt.media.forEach(m => { let s = (typeof m === 'string') ? m : m.url; let iV = (typeof m === 'object' && m.type === 'video') || s.includes('video'); if (!iV && !aI.includes(s)) aI.push(s); }); } }); } });
    if (aI.length < 6) { g.style.display = 'none'; p.style.display = 'block'; p.innerHTML = `<div style="background:rgba(255,255,255,0.8); padding:20px; border-radius:16px; text-align:center;"><div style="font-size:3rem; margin-bottom:12px;">📸</div><strong style="font-size:1.1rem;">-</strong><p style="font-size:0.95rem; font-weight:600; margin-top:8px;">${6 - aI.length}</p></div>`; return; }
    p.style.display = 'none'; g.style.display = 'block'; grid.innerHTML = ''; memoryAttempts = 0; matchedPairs = 0; let sE = document.getElementById('memoryScore'); if (sE) sE.innerText = `${memoryAttempts}`;
    let sI = aI.sort(() => 0.5 - Math.random()).slice(0, 6); memoryCards = [...sI, ...sI].sort(() => 0.5 - Math.random());
    memoryCards.forEach((s, i) => { let c = document.createElement('div'); c.className = 'memory-card'; c.dataset.src = s; c.innerHTML = `<div class="memory-card-inner"><div class="memory-card-front"><img src="${s}"></div><div class="memory-card-back">🧸</div></div>`; c.onclick = () => flipMemoryCard(c); grid.appendChild(c); });
}
function flipMemoryCard(c) { if (lockBoard || c.classList.contains('flipped')) return; c.classList.add('flipped'); flippedCards.push(c); if (flippedCards.length === 2) { memoryAttempts++; let s = document.getElementById('memoryScore'); if (s) s.innerText = `${memoryAttempts}`; checkForMatch(); } }
function checkForMatch() { let m = flippedCards[0].dataset.src === flippedCards[1].dataset.src; if (m) { matchedPairs++; flippedCards = []; if (matchedPairs === 6) setTimeout(() => { alert(`🎉 ${memoryAttempts}!`); }, 500); } else { lockBoard = true; setTimeout(() => { flippedCards[0].classList.remove('flipped'); flippedCards[1].classList.remove('flipped'); flippedCards = []; lockBoard = false; }, 1200); } }

// ==========================================
// MEILENSTEINE
// ==========================================
function initMilestoneScreen() {
    let container = document.getElementById('milestoneListContainer'); 
    if (!container) return; container.innerHTML = '';
    
    let milestones = [];
    Object.keys(allPosts).forEach(day => {
        if (allPosts[day]) {
            allPosts[day].forEach((post, index) => {
                if (post.isMilestone && isKidVisible(post.childIndex)) {
                    milestones.push({ day: day, post: post, index: index });
                }
            });
        }
    });
    
    if (milestones.length === 0) {
        container.innerHTML = '<p style="font-size:0.95rem; font-weight:600; color:var(--text-muted);">-</p>';
        return;
    }
    
    milestones.sort((a, b) => Number(b.day) - Number(a.day));
    
    let now = new Date();
    milestones.forEach(item => {
        let dateStr = `${String(item.day).padStart(2, '0')}.${String(now.getMonth() + 1).padStart(2, '0')}.${now.getFullYear()}`;
        let kidName = kids[item.post.childIndex] ? kids[item.post.childIndex].name : 'Kind';
        
        let firstMedia = (item.post.media && item.post.media.length > 0) ? item.post.media[0] : null;
        let firstSrc = firstMedia ? ((typeof firstMedia === 'string') ? firstMedia : firstMedia.url) : null;
        let imgHtml = firstSrc ? `<img src="${firstSrc}" style="width:70px; height:70px; border-radius:14px; object-fit:cover;">` : `<div style="width:70px; height:70px; background:var(--primary-light); display:flex; align-items:center; justify-content:center; font-size:2rem; border-radius:14px; color:var(--primary);">🏆</div>`;
        
        let div = document.createElement('div'); 
        div.style.cssText = "background:rgba(255,255,255,0.8); padding:16px; border-radius:20px; display:flex; align-items:center; gap:16px; cursor:pointer;";
        div.onclick = () => { openViewPostModal(item.day, item.post.childIndex, item.index); };
        
        div.innerHTML = `
            ${imgHtml}
            <div style="flex:1;">
                <div style="font-size: 0.85rem; font-weight:800; color: var(--text-muted); margin-bottom: 4px;">${dateStr} • ${kidName}</div>
                <div style="font-weight: 800; color: var(--text-main); font-size: 1.1rem; overflow:hidden; text-overflow:ellipsis; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical;">${item.post.text || '...'}</div>
            </div>
        `;
        container.appendChild(div);
    });
}
