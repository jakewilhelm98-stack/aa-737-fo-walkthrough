const FLASHCARDS = [
 {
  "section": "Electrical",
  "question": "With Standby Power OFF light illuminated, you could power the standby busses directly from the battery by ____.",
  "answer": "placing the standby power switch to BAT",
  "explanation": "The STANDBY POWER switch has three positions: AUTO, OFF, and BAT. When the OFF light is on, it means the standby buses lost their normal power source (Transfer Bus 1). Moving the switch to BAT bypasses the normal auto-switching logic and forces the battery to directly power the DC standby bus and, through the static inverter, the AC standby bus."
 },
 {
  "section": "Electrical",
  "question": "DC power is supplied by ____.",
  "answer": "transformer rectifier units, the battery charger, and the battery",
  "explanation": "The 737 converts its AC power (115V) into 28V DC using three transformer rectifier units (TRUs). The battery charger keeps the NiCd battery topped off, and the battery itself can supply DC directly to the battery bus, hot battery bus, and standby buses when AC power is lost. These three sources cover all normal and emergency DC needs."
 },
 {
  "section": "Electrical",
  "question": "Normally, the AC electrical system is run ____.",
  "answer": "isolated",
  "explanation": "This is one of the two fundamental rules of the 737 electrical system: AC sources are never paralleled. Each engine IDG powers only its own transfer bus, and the two sides stay electrically isolated. This prevents a fault on one side from cascading to the other. The bus ties only close to cross-connect if one source fails."
 },
 {
  "section": "Electrical",
  "question": "The static inverter is powered by ____.",
  "answer": "the battery",
  "explanation": "The static inverter converts the battery's 24V DC into 115V AC to power the AC standby bus when normal AC power is lost. It is the only way to get AC power from the battery, and it is sized to handle just the essential AC loads on the standby bus -- not the full airplane."
 },
 {
  "section": "Electrical",
  "question": "The Ground Service Switch is located _________________.",
  "answer": "on the forward attendant panel",
  "explanation": "The Ground Service Switch is intentionally placed on the forward flight attendant panel -- not in the cockpit -- so that cabin crew or ground staff can power the ground service buses for cabin lighting and the battery charger without needing access to the flight deck. This allows cabin prep to begin before pilots arrive."
 },
 {
  "section": "Electrical",
  "question": "The DC Cross Bus Tie Relay will open ____.",
  "answer": "at glideslope capture during a flight director or autopilot ILS approach",
  "explanation": "During an ILS approach, the airplane relies on two independent nav receivers and flight control computers (one per side). The cross bus tie relay opens at glideslope capture to electrically isolate DC Bus 1 from DC Bus 2, so a single DC bus failure cannot take out both ILS receivers simultaneously. This is a built-in redundancy measure for the most critical phase of flight."
 },
 {
  "section": "Electrical",
  "question": "Circuit breakers are allowed to be pulled and reset ____.",
  "answer": "only if specified in a QRH procedure",
  "explanation": "AA policy restricts pulling or resetting circuit breakers to only those situations called out in a QRH checklist. This prevents crews from inadvertently re-energizing a faulted circuit that tripped for a good reason, like a short circuit or overheating wire, which could cause a fire or further damage."
 },
 {
  "section": "Electrical",
  "question": "After engine start, the crew forgets to put the generators on line and uses the APU to power the Transfer Busses for takeoff. If the APU fails, the ____.",
  "answer": "generators are automatically placed on line",
  "explanation": "The 737 has a one-time automatic generator connection feature: if the airplane takes off with the APU powering both transfer buses and the APU subsequently shuts down, the engine generators will automatically connect to their respective transfer buses. This is a safety net that happens only once per flight to prevent a total loss of electrical power."
 },
 {
  "section": "Electrical",
  "question": "On the ground with the APU powering the electrical systems, the APU GEN OFF BUS light will be _____.",
  "answer": "OFF",
  "explanation": "The APU GEN OFF BUS light illuminates when the APU generator is NOT connected to the bus. When the APU is running and actually powering the transfer buses normally, the light is OFF because the generator IS on the bus. It is a dark-when-normal annunciator -- you only see it when something is wrong or the generator is intentionally disconnected."
 },
 {
  "section": "Electrical",
  "question": "When moved to OFF, the BUS TRANSFER switch will ____.",
  "answer": "isolate the AC and DC Busses on Electrical System 1 from the AC and DC Busses on Electrical System 2",
  "explanation": "The BUS TRANSFER switch in AUTO allows the bus tie breakers to automatically close and cross-connect the two sides if a source fails. Moving it to OFF disables this automatic cross-connection, fully isolating Side 1 from Side 2 on both the AC and DC systems. You would do this if you suspect a fault that could propagate between sides."
 },
 {
  "section": "Electrical",
  "question": "In a normally operating AC electrical system, if the Bus Transfer Switch is moved to OFF, ____.",
  "answer": "and if a generator subsequently fails, the bus ties will not close to transfer power",
  "explanation": "With the BUS TRANSFER switch OFF, you have deliberately told the system not to cross-connect the two sides. So if a generator fails on one side, the bus tie breakers will stay open and the affected side loses power. The remaining generator will NOT pick up the other side's loads. This is the trade-off of isolating the buses."
 },
 {
  "section": "Electrical",
  "question": "If the Standby Power \"OFF\" light illuminates, it means ____ is/are not powered.",
  "answer": "the AC Standby Bus the DC Standby Bus the Battery Bus one or more of the above",
  "explanation": "The STANDBY PWR OFF light is a catch-all warning that at least one of the three standby system buses has lost power. It could be any combination of the AC Standby Bus, DC Standby Bus, or Battery Bus. The light does not tell you which specific bus is affected -- you need to investigate further using the DC meters and system knowledge."
 },
 {
  "section": "Electrical",
  "question": "With standby electrical power only, the Captain will be able to fly _____ instrument approaches.",
  "answer": "a. LOC only b. VOR c. ILS d. All of the above",
  "explanation": "On standby power, the captain's side retains VHF NAV No. 1, ILS No. 1, DME No. 1, the captain's PFD and ND, and the left FMC/CDU. This means all the navigation equipment needed for ILS, localizer-only, and VOR approaches is available on the captain's side. The answer is D -- all of the above."
 },
 {
  "section": "Electrical",
  "question": "The AC standby bus can be powered by ____ if its normal power source fails.",
  "answer": "the battery (through the static inverter)",
  "explanation": "Normally the AC standby bus is powered by AC Transfer Bus 1. If Transfer Bus 1 loses power, the standby power system automatically switches: the battery feeds the static inverter, which converts 24V DC to 115V AC, and that AC powers the AC standby bus. This is the backup path that keeps essential captain-side AC instruments alive."
 },
 {
  "section": "Electrical",
  "question": "During an ILS approach, the cross bus tie relay automatically opens at glideslope capture to ____.",
  "answer": "prevent single bus failure from affecting both navigation receivers and flight control computers",
  "explanation": "The ILS approach requires two independent nav systems for redundancy. If the DC buses stayed cross-tied, a single bus fault could cascade and take out both ILS receivers. By opening the cross bus tie relay at glideslope capture, each nav receiver and flight control computer is electrically independent, so one failure cannot compromise the whole approach."
 },
 {
  "section": "Electrical",
  "question": "With a normally operating electrical system, placing the Battery Switch OFF ____.",
  "answer": "removes power to the Battery Bus and the Switched Hot Battery Bus",
  "explanation": "The Battery Switch controls the connection between the battery and its buses. With normal AC power available, TR3 powers the Battery Bus through the battery switch circuit. Turning the switch OFF disconnects the battery from the Battery Bus and the Switched Hot Battery Bus. Note the Hot Battery Bus is always connected to the battery regardless of switch position -- there is no switch in that circuit."
 },
 {
  "section": "Electrical",
  "question": "The DC Standby Bus can be powered by ____.",
  "answer": "TR1, TR2, TR3, and the battery",
  "explanation": "The DC Standby Bus has the most backup sources of any DC bus. Normally TR1, TR2, and TR3 all feed it through the cross bus tie relay. If all AC power is lost, the battery takes over directly. This high level of redundancy makes sense because the DC standby bus powers critical instruments and communications on the captain's side."
 },
 {
  "section": "Electrical",
  "question": "Under what conditions can External power be used to power one AC Transfer Bus, and the APU the other Transfer Bus?",
  "answer": "No condition. The electrical system will not allow it.",
  "explanation": "The 737 electrical system enforces the no-paralleling rule strictly. You cannot split external power and APU power across the two transfer buses -- whichever source you select last will power both buses and automatically disconnect the previous source. This prevents any possibility of connecting two unsynchronized AC sources."
 },
 {
  "section": "Electrical",
  "question": "What does an illuminated ELEC light, on the AC and DC Metering Panel, mean?",
  "answer": "A Standby Power or DC system fault has occurred.",
  "explanation": "The ELEC annunciator on the metering panel is a general alert that something is wrong with either the standby power system or the DC power system. It does not pinpoint the exact fault -- it just tells you to investigate further. On the ground, it illuminates with the master caution and cannot be cleared until the fault is resolved."
 },
 {
  "section": "Electrical",
  "question": "The BAT DISCHARGE light illuminated indicates excessive battery discharge is detected with the battery switch on. How long will the battery provide power?",
  "answer": "A fully charged battery provides a minimum of 30 minutes of standby power.",
  "explanation": "The 24V NiCd battery is sized to provide at least 30 minutes of standby power to the essential buses. The BAT DISCHARGE light (amber) warns that the battery is discharging at a high rate, meaning AC power is not available to keep it charged. That 30-minute figure is the minimum with a fully charged battery -- it sets your clock for getting to an airport."
 },
 {
  "section": "Electrical",
  "question": "If the TR Unit light illuminates, inflight, it means ____ have failed.",
  "answer": "TR1 has failed or TR2 and TR3",
  "explanation": "The TR UNIT light has different logic in flight versus on the ground. In flight, it only illuminates for failures that significantly impact the DC system: either TR1 has failed (which directly affects DC Bus 1 and captain-side equipment), or both TR2 and TR3 have failed together (which would leave no backup). A single TR2 or TR3 failure in flight is not annunciated because TR3 can back up either side."
 },
 {
  "section": "Electrical",
  "question": "If the TR Unit light illuminates on the ground, it means ____ has/have failed.",
  "answer": "any TR unit",
  "explanation": "On the ground, the TR UNIT light is more sensitive -- it illuminates for any single TR failure. This makes sense because on the ground you have time to troubleshoot and fix things before dispatch. In flight, the annunciation is filtered to only alert you to operationally significant failures."
 },
 {
  "section": "Electrical",
  "question": "In flight, if an engine generator fails, load shedding ____.",
  "answer": "is designed to shed electrical load incrementally",
  "explanation": "When one generator fails and the remaining generator picks up both sides, the system uses actual load sensing to shed loads incrementally rather than all at once. It sheds in order: first the galleys and main bus on Transfer Bus 2, then Transfer Bus 1's galleys and main bus, and finally the IFE buses. This graduated approach keeps as many systems running as the remaining generator can handle."
 },
 {
  "section": "Electrical",
  "question": "Following the loss of both generators, which busses remain powered?",
  "answer": "Battery Bus, Hot Battery Bus, Switched Hot Battery Bus, DC Standby Bus, AC Standby Bus",
  "explanation": "With both generators gone, the battery is the only power source. It directly powers the Battery Bus, Hot Battery Bus, Switched Hot Battery Bus, and DC Standby Bus. Through the static inverter, it also powers the AC Standby Bus. These five buses carry the minimum essential equipment for the captain to fly and land the airplane."
 },
 {
  "section": "Electrical",
  "question": "During landing with a loss of both generators, you check the QRH additional information. Auto Brakes and Speed Brakes are available.",
  "answer": "False",
  "explanation": "Auto brakes and speed brakes require hydraulic and electrical power from the main buses, which are not powered when running on battery alone. On standby power, you only have the five standby/battery buses, which do not supply the autobrake or speed brake systems. The crew must plan for manual braking and no automatic ground spoiler deployment."
 },
 {
  "section": "Electrical",
  "question": "With these lights illuminated, ____.",
  "answer": "the AC Transfer Bus 1 is no longer powered",
  "explanation": "This question refers to a panel graphic showing specific annunciator lights. When you see the SOURCE OFF and GEN OFF BUS lights on the #1 side, it indicates that AC Transfer Bus 1 has lost its power source. The IDG or its engine has failed, and no other source has picked up that bus yet."
 },
 {
  "section": "Electrical",
  "question": "Which of the following is also true?",
  "answer": "AC Standby Bus is being powered by the static inverter.",
  "explanation": "When AC Transfer Bus 1 loses power, the standby power system automatically kicks in. Since the AC Standby Bus is normally fed by Transfer Bus 1, losing that bus triggers the automatic switchover: the battery powers the static inverter, which then supplies 115V AC to the AC Standby Bus. This happens automatically when the STANDBY POWER switch is in AUTO."
 },
 {
  "section": "Electrical",
  "question": "Since AC Transfer Bus 1 is dead, ____.",
  "answer": "the battery charger is being powered by AC Ground Service Bus 2",
  "explanation": "The battery charger normally gets its AC power from Transfer Bus 1. When that bus dies, the charger automatically switches to an alternate AC source -- the AC Ground Service Bus 2, which is powered from the Side 2 system. This keeps the battery charged even with one transfer bus failed, which is critical since the battery is now also powering the standby buses."
 },
 {
  "section": "Electrical",
  "question": "In flight, these two lights indicate that _____.",
  "answer": "Either IDG 1 has failed or engine 1 has shut down",
  "explanation": "The SOURCE OFF and GEN OFF BUS lights on the #1 side tell you that IDG 1 is not providing power to Transfer Bus 1. This could be because the IDG itself failed (low oil pressure, overheat, disconnected) or because engine 1 shut down and is no longer driving the IDG. Either way, the #1 side has lost its primary power source."
 },
 {
  "section": "Electrical",
  "question": "Which statement is true?",
  "answer": "IDG 2 is powering both AC Transfer Busses.",
  "explanation": "When IDG 1 fails in flight with the BUS TRANSFER switch in AUTO, the bus tie breakers automatically close, allowing IDG 2 to cross-feed and power both Transfer Bus 1 and Transfer Bus 2. This is the normal automatic response -- the remaining generator picks up the entire airplane, with load shedding as needed."
 },
 {
  "section": "Electrical",
  "question": "Inflight, engine #1 experiences a loss of all thrust as shown on the Upper Display Unit above. This situation would also be accompanied by which of the following electrical system lights on the overhead panel.",
  "answer": "#1 SOURCE OFF, DRIVE lights and #1 GEN OFF BUS",
  "explanation": "When engine 1 loses all thrust, it stops driving IDG 1. This means the IDG can no longer produce power, so you get the #1 SOURCE OFF light (no source on Transfer Bus 1), the DRIVE light (IDG problem), and the #1 GEN OFF BUS light (generator not connected to its bus). All three are logical consequences of the engine failure."
 },
 {
  "section": "Electrical",
  "question": "If this combination of lights comes on, including the ELEC light on the overhead panel, _____.",
  "answer": "resetting the Master Caution will not extinguish the ELEC light, thus the aircraft cannot be dispatched",
  "explanation": "The ELEC light on the overhead panel indicates a DC or standby power system fault. Unlike the master caution (which can be reset/acknowledged), the ELEC light stays illuminated as long as the underlying fault exists. If it won't extinguish after resetting master caution, the fault is real and persistent, making the aircraft unfit for dispatch."
 },
 {
  "section": "Electrical",
  "question": "When illuminated, the ELEC light indicates ____.",
  "answer": "a fault exists in the DC or standby power systems",
  "explanation": "The ELEC annunciator specifically monitors the DC power system and the standby power system. It does not illuminate for AC-only faults like a generator failure. If you see the ELEC light, focus your troubleshooting on the TRUs, battery system, and standby power components."
 },
 {
  "section": "Electrical",
  "question": "This ELEC light illuminates ____.",
  "answer": "only with the airplane on the ground",
  "explanation": "There are actually two ELEC lights -- one on the forward overhead panel and one on the aft overhead metering panel. The one being referenced here illuminates only on the ground, which makes sense as a maintenance/dispatch alert. It helps ground crews and pilots identify DC or standby power faults before the airplane leaves the gate."
 },
 {
  "section": "Electrical",
  "question": "During APU Start, without AC power available, this light illuminates and ____.",
  "answer": "is a temporary situation that should resolve itself when AC power is connected",
  "explanation": "When you start the APU with only battery power, you may briefly see warning lights like BAT DISCHARGE or STANDBY PWR OFF because the battery is under heavy load and no AC power exists yet. Once the APU comes online and its generator connects, AC power is restored, the battery charger begins working, and these temporary annunciations clear themselves."
 },
 {
  "section": "Electrical",
  "question": "The APU is now started and AC power is applied. Assuming that everything is normal, the BAT DISCHARGE light should ______.",
  "answer": "Extinguish indicating the battery charger is operational",
  "explanation": "The BAT DISCHARGE light illuminated because the battery was the sole power source during APU start. Once the APU generator comes online and powers the buses, the battery charger receives AC power and begins recharging the battery. The excessive discharge condition clears, and the light extinguishes. If it stays on, something is wrong with the charging circuit."
 },
 {
  "section": "Electrical",
  "question": "If during flight, the master caution light and the electric annunciator alert you to the BAT DISCHARGE light being on, ____.",
  "answer": "the battery is indicating excessive discharge",
  "explanation": "In flight, the BAT DISCHARGE light with a master caution means the battery is draining faster than it should be. Normally in flight the battery is continuously charged by the battery charger (powered by AC). If you see excessive discharge, it could mean the battery charger has failed or there is an abnormal load on the battery bus. This starts your 30-minute clock if you cannot restore charging."
 },
 {
  "section": "Electrical",
  "question": "Since IDG 1 is not powering AC Transfer Bus 1, the SOURCE OFF light remains illuminated. The QRH directs a start of the APU and a connection to the affected bus. Once this step is accomplished, what happens on the left side?",
  "answer": "SOURCE OFF light and APU light would extinguish, and the GEN OFF BUS light would remain illuminated.",
  "explanation": "When the APU generator is connected to Transfer Bus 1, it becomes the new source for that bus, so the SOURCE OFF light extinguishes (the bus now has a source) and the APU light goes off (APU gen is on the bus). However, IDG 1 is still failed and not connected, so the GEN OFF BUS light stays on to remind you that the engine generator is not powering its bus."
 },
 {
  "section": "Electrical",
  "question": "In this scenario, the illumination of the #1 DRIVE light is the result of ____.",
  "answer": "Low IDG oil pressure",
  "explanation": "The DRIVE light on the 737 indicates an IDG problem -- specifically low oil pressure or high oil temperature. The IDG (Integrated Drive Generator) uses oil for both lubrication and cooling of its constant-speed drive mechanism. Low oil pressure is the most common trigger and usually means the IDG needs to be disconnected to prevent mechanical damage."
 },
 {
  "section": "Electrical",
  "question": "What conditions cause the GRD POWER AVAILABLE light to be illuminated?",
  "answer": "Ground power is plugged in and meets airplane power quality standards.",
  "explanation": "The GRD POWER AVAILABLE light is blue and illuminates only when external ground power is physically connected to the receptacle near the nose gear AND the power meets the airplane's voltage, frequency, and phase requirements. This quality check prevents connecting bad power that could damage avionics or other electrical components."
 },
 {
  "section": "Electrical",
  "question": "Based on the graphic to the right, which statement is correct?",
  "answer": "AC Standby bus is being powered by the static inverter",
  "explanation": "When you see indications showing that AC Transfer Bus 1 has lost power, the standby power system's automatic switching activates. The battery feeds the static inverter, which converts DC to AC and powers the AC Standby Bus. This is the standard automatic response when the STANDBY POWER switch is in AUTO and Transfer Bus 1 is lost."
 },
 {
  "section": "Electrical",
  "question": "If you see these lights in flight, what do they indicate?",
  "answer": "Power has been lost to both AC Transfer Busses.",
  "explanation": "Seeing SOURCE OFF and GEN OFF BUS lights on BOTH sides simultaneously means neither IDG is providing power. This is a dual-generator failure scenario -- both AC transfer buses are dead. The airplane is now on battery/standby power only, and the crew needs to attempt an APU start immediately per the QRH."
 },
 {
  "section": "Electrical",
  "question": "The QRH directs the crew to attempt a start of the APU. If the aircraft is below 25,000 ft, the APU __.",
  "answer": "should start with battery power and fuel suction feed",
  "explanation": "Below 25,000 feet, the APU can start using just battery power (no AC needed for the start sequence) and fuel suction feed (fuel is drawn to the APU by suction rather than needing electric boost pumps). This is critical in a dual-generator failure because you have no AC power and possibly no fuel boost pumps -- the APU is self-sufficient for starting at lower altitudes."
 },
 {
  "section": "Electrical",
  "question": "APU power is not available. Since we are on emergency power, the Right IRS is on DC power and will remain on DC for ____ minutes.",
  "answer": "5",
  "explanation": "When the airplane switches to standby power, the right IRS temporarily runs on DC power as a backup. However, it can only sustain this for 5 minutes before it shuts down. The left IRS remains powered through the standby buses on the captain's side. This 5-minute window gives the crew time to attempt restoring AC power before losing the right IRS entirely."
 },
 {
  "section": "Electrical",
  "question": "The aircraft has been struck by lightning. You observe these conditions on the Electrical Panel and the MASTER CAUTION and ELEC Annunciator Lights illuminated. Before any corrections are attempted, which of the following components is still available?",
  "answer": "Left EFIS Control Panel",
  "explanation": "After a lightning strike that disrupts the main electrical system, standby power keeps the captain's side instruments alive. The Left EFIS Control Panel is powered through the standby/battery buses, so it remains operational. This is by design -- the captain's primary flight instruments are on the most protected electrical buses to ensure flyability in emergencies."
 },
 {
  "section": "Electrical",
  "question": "The crew can't restore normal electrical power and elects to divert and land ASAP. Focusing on the Left EFIS Control Panel, momentarily pressing the Radio Minimums Reset (RST) Switch ____.",
  "answer": "Resets the alert minimums annunciation.",
  "explanation": "The RST switch on the EFIS Control Panel resets the radio altitude minimums alert. When you reach your set minimums on approach, the system annunciates it. Pressing RST acknowledges and clears that annunciation. This is a normal EFIS function that remains available on standby power since the captain's displays and controls are on the standby buses."
 },
 {
  "section": "Electrical",
  "question": "Since the aircraft is still on standby power, the Captain flies the approach and presses the Center (CTR) Switch on the Left EFIS Control Panel. This provides a full compass rose on the Left Nav Display in the __ Mode. Select the most correct answer.",
  "answer": "a. APP b. VOR c. MAP d. All of the above are correct.",
  "explanation": "The CTR switch on the EFIS Control Panel toggles the compass rose display to a full (360-degree) centered compass rose on the Navigation Display. This works in APP, VOR, and MAP modes -- all three support the full compass rose option. On standby power, the captain's ND is still fully functional through the standby bus, so all display modes remain available."
 },
 {
  "section": "Electrical",
  "question": "The illumination of this light means ___.",
  "answer": "Either the AC Standby Bus, the DC Standby Bus, the Battery Bus. or any combination of these three busses has lost power",
  "explanation": "This refers to the STANDBY PWR OFF light. It is a general alert that one or more of the three standby-system buses has lost power. It does not differentiate which bus is affected. The crew needs to use the STANDBY POWER switch position and DC meters to determine the specific failure and take appropriate action from the QRH."
 },
 {
  "section": "Electrical",
  "question": "Select the correct answer to solve this problem.",
  "answer": "You should be able to repower the affected bus by moving the STANDBY POWER switch to BAT",
  "explanation": "When the standby buses lose power and the automatic switching has not resolved the issue, the crew can manually force battery power to the standby system by moving the STANDBY POWER switch from AUTO to BAT. This bypasses whatever automatic logic failed and directly connects the battery to the DC standby buses and the static inverter to the AC standby bus."
 },
 {
  "section": "Electrical",
  "question": "The QRH directs moving the STANDBY POWER switch to BAT. What source are you now using to re-power the affected bus?",
  "answer": "The battery",
  "explanation": "Moving the STANDBY POWER switch to BAT forces the battery to directly power the standby system. The battery supplies DC to the DC standby bus and battery bus, and feeds the static inverter to produce AC for the AC standby bus. You are now on battery power for these buses, regardless of whether AC transfer buses are available."
 },
 {
  "section": "Electrical",
  "question": "You have confirmed that the #1 Engine and IDG have failed. The QRH will direct the crew to start the APU. If the APU is to be used as an electrical source only, the maximum altitude for APU operation is __ feet MSL.",
  "answer": "41,000",
  "explanation": "The APU on the 737 is certified to provide electrical power (generator only, no bleed air) up to the airplane's maximum operating altitude of 41,000 feet. If you also need bleed air from the APU, the altitude limit is lower. But for electrical-only use, the APU can run at any altitude the airplane can fly, which is a valuable backup for generator failures at high altitude."
 },
 {
  "section": "Aircraft Lighting",
  "question": "Emergency Lighting will automatically illuminate when the switch is in the ARMED position and _____.",
  "answer": "AC power is turned off OR ALSO: DC Bus 1 fails",
  "explanation": "The emergency lights are designed to come on automatically when the airplane loses its normal power, since that is exactly when you would need independent emergency illumination for evacuation. In the ARMED position, the lights monitor for loss of AC power or DC Bus 1 failure as triggers, ensuring passengers can see the exit path even in a total electrical failure."
 },
 {
  "section": "Aircraft Lighting",
  "question": "The emergency exit lights may be illuminated by a switch on the ____.",
  "answer": "aft flight attendant panel",
  "explanation": "Having a manual switch on the aft flight attendant panel allows a cabin crew member in the back of the airplane to activate emergency lighting independently. This provides redundancy -- if the cockpit crew is incapacitated or the forward panel is inaccessible, the aft FA can still illuminate the emergency exit path for evacuation."
 },
 {
  "section": "Aircraft Lighting",
  "question": "The amber emergency light NOT ARMED illuminates when the switch is in ____.",
  "answer": "the OFF position OR ALSO: the ON position",
  "explanation": "The NOT ARMED light illuminates whenever the emergency light switch is NOT in the ARMED position. Both OFF and ON positions are considered not armed. OFF means the lights are disabled; ON means they are forced on manually. Only ARMED sets up the automatic activation feature, so the amber light reminds the crew that the auto function is not active."
 },
 {
  "section": "Aircraft Lighting",
  "question": "Exterior lights, except position and anti-collision, should be extinguished by the time you reach ____.",
  "answer": "18,000 feet",
  "explanation": "Position lights and anti-collision lights (beacons) stay on at all altitudes for traffic visibility. But landing lights, taxi lights, runway turnoff lights, and other high-power exterior lights should be turned off by 18,000 feet. Above that altitude, the chance of bird strikes is negligible, and these lights draw significant electrical power and generate heat that is unnecessary in cruise."
 },
 {
  "section": "Aircraft Lighting",
  "question": "Wing illumination lights ___________.",
  "answer": "are installed on the fuselage and illuminate the leading edge of the wing",
  "explanation": "Wing illumination lights are mounted on the fuselage and aimed outward to shine on the wing's leading edge. Their primary purpose is ice inspection -- the crew can turn them on at night to visually check if ice is accumulating on the wings. They are not navigation or landing lights; they are purely for the crew to see the wing surface."
 },
 {
  "section": "Aircraft Lighting",
  "question": "Retractable landing lights ___________.",
  "answer": "May be extended at any speed",
  "explanation": "The 737's retractable landing lights are designed to be extended at any airspeed without structural limitation. This is useful because crews may need to turn them on at various speeds for traffic avoidance or when cleared for a visual approach at higher-than-normal speeds. There is no speed restriction to worry about when selecting them on."
 },
 {
  "section": "Emergency Equipment",
  "question": "On the B737, the nearest megaphone to the cockpit is located in the ____.",
  "answer": "forward entry area aisle side storage space",
  "explanation": "The megaphone is stowed in the forward entry area on the aisle side so it is immediately accessible to the crew during an evacuation. If the PA system is inoperative, the captain or a flight attendant can grab the megaphone right at the forward door to direct passengers during an emergency evacuation."
 },
 {
  "section": "Emergency Equipment",
  "question": "The emergency exit door flight lock failed indications are inhibited until ____ seconds after the airplane is in the ground mode.",
  "answer": "30",
  "explanation": "The 30-second delay prevents nuisance warnings during the landing rollout transition. When the airplane goes from air mode to ground mode on touchdown, various systems are switching states. The delay ensures the door lock system has time to settle before annunciating any genuine failures, avoiding distracting the crew during the critical rollout phase."
 },
 {
  "section": "Emergency Equipment",
  "question": "There are ____ over wing emergency exits on the B737.",
  "answer": "4",
  "explanation": "The 737-800 has four overwing emergency exits -- two on each side of the fuselage, over the wing. These are hatch-type exits that passengers can operate by pulling a handle and pushing the hatch out. Combined with the four main entry/service doors, this gives the airplane eight exits total for evacuation."
 },
 {
  "section": "Emergency Equipment",
  "question": "The overwing emergency exits lock when ____.",
  "answer": "3 of the 4 entry/service doors are closed either engine is running the airplane air/ground logic indicates that the airplane is in the air or both throttles are advanced all of the above",
  "explanation": "The overwing exits automatically lock under flight conditions to prevent accidental opening. The system uses multiple triggers: doors closed, engines running, air/ground logic showing airborne, or throttles advanced. Any of these conditions will engage the flight locks. The answer is all of the above -- the system is designed to lock the overwing exits whenever the airplane is in or preparing for flight."
 },
 {
  "section": "Emergency Equipment",
  "question": "There are ____ 56 person raft(s) installed in the ceiling of the aircraft.",
  "answer": "3",
  "explanation": "The 737-800 at AA carries three 56-person rafts stowed in the ceiling of the cabin. Three rafts at 56 persons each provide capacity for 168 people, which covers the maximum passenger load plus crew. They are ceiling-mounted so they are accessible from inside the cabin and can be deployed through the main doors or overwing exits in a ditching scenario."
 },
 {
  "section": "Emergency Equipment",
  "question": "The non-portable Emergency Locator Transmitter (ELT) in aircraft 3DM & Sub has a control switch ____.",
  "answer": "On the cockpit overhead panel",
  "explanation": "The fixed (non-portable) ELT has its control switch on the cockpit overhead panel so the flight crew can manually activate it if needed, or verify its status. The ELT also activates automatically on impact via a G-switch, but having a cockpit switch gives the crew manual control for situations like a controlled ditching where they want to ensure the signal is transmitting."
 },
 {
  "section": "Oxygen",
  "question": "The Flight Crew Oxygen Pressure Indicator is located on the ____.",
  "answer": "Aft Overhead Panel",
  "explanation": "The crew oxygen pressure gauge is on the aft overhead panel, where the pilots check it during the preflight scan. It shows the pressure in the high-pressure oxygen cylinder stored in the electronics compartment. Checking this gauge before every flight ensures there is adequate oxygen for the crew in case of a cabin depressurization."
 },
 {
  "section": "Oxygen",
  "question": "The flow options on the crew oxygen mask regulator are ____.",
  "answer": "Emerg, Normal, and 100%",
  "explanation": "The three settings serve different needs. NORMAL dilutes oxygen with cabin air based on altitude, conserving oxygen supply during minor events. 100% delivers pure oxygen under positive pressure for higher altitude situations. EMERGENCY provides 100% oxygen under positive pressure AND inflates the smoke goggles, which is used during fire or smoke events where you need both pure oxygen and eye protection."
 },
 {
  "section": "Oxygen",
  "question": "The minimum recommended oxygen pressure for dispatch is ____ psi.",
  "answer": "850",
  "explanation": "850 psi is the minimum recommended dispatch pressure to ensure there is enough oxygen for the crew throughout the flight, including time needed to descend to a safe altitude after a depressurization. If the gauge reads below 850 psi, the bottle should be serviced before departure to ensure adequate crew protection."
 },
 {
  "section": "Oxygen",
  "question": "Passenger oxygen is supplied from ____.",
  "answer": "Chemical oxygen generators for each PSU",
  "explanation": "Unlike the flight crew system which uses a high-pressure bottle, passenger oxygen comes from chemical oxygen generators built into each Passenger Service Unit (PSU) above the seats. When a mask is pulled, it triggers a chemical reaction that produces oxygen. Chemical generators are used because they are lightweight, maintenance-free, and can serve many passengers without the plumbing a centralized bottle system would require."
 },
 {
  "section": "Oxygen",
  "question": "Passenger oxygen masks are deployed ____.",
  "answer": "Automatically with cabin altitude of 14,000 ft. OR ALSO: manually when the Passenger Oxygen Switch is placed to ON",
  "explanation": "The masks drop automatically at approximately 14,000 feet cabin altitude because that is the threshold where supplemental oxygen becomes necessary for passenger safety. The crew can also manually deploy them from the cockpit using the PASS OXY switch, which is useful if the crew detects a problem before the automatic threshold is reached, such as a slow depressurization."
 },
 {
  "section": "Oxygen",
  "question": "Passenger oxygen provides a continuous flow for approximately ___ minutes.",
  "answer": "12",
  "explanation": "The chemical oxygen generators provide about 12 minutes of continuous flow. This sounds short, but it is designed to cover the time needed for the pilots to execute an emergency descent from cruise altitude to 10,000 feet or below, where cabin altitude is safe to breathe without supplemental oxygen. The descent typically takes well under 12 minutes."
 },
 {
  "section": "Oxygen",
  "question": "How many oxygen masks are located above each set of passenger seats? Each flight attendant station? ____.",
  "answer": "4,2",
  "explanation": "Each row of three passenger seats has four masks (one extra in case of a lap infant or if one mask malfunctions). Each flight attendant station has two masks for the same redundancy reason -- if one mask fails, the FA still has a backup. The extra mask per unit is a standard safety margin built into the PSU design."
 },
 {
  "section": "Oxygen",
  "question": "____ will cause the PASS OXY ON light to illuminate in the cockpit.",
  "answer": "Manual activation of the passenger oxygen masks",
  "explanation": "The PASS OXY ON light in the cockpit only illuminates when the crew manually deploys the masks using the PASS OXY switch. It does NOT illuminate during automatic deployment at 14,000 feet cabin altitude. This means if you see the light, someone in the cockpit actively flipped the switch. If masks deploy automatically, you will know from the cabin altitude warning, not from this light."
 },
 {
  "section": "Engines",
  "question": "What component regulates the engine to keep it within operating parameters?",
  "answer": "The dual channel electronic engine control (EEC).",
  "explanation": "Each engine has its own dual-channel EEC that continuously monitors and adjusts fuel flow, ignition, and other parameters to keep the engine running within safe limits. The dual-channel design provides redundancy -- if one channel fails, the other can take over, which is why you have normal, soft alternate, and hard alternate modes."
 },
 {
  "section": "Engines",
  "question": "Thrust reverser operation is available below _____ altitude or when the air/ground sensor is in the _____ mode.",
  "answer": "10 feet/ground",
  "explanation": "Thrust reversers are strictly for ground operations. The system uses the radio altimeter (below 10 feet) or the air/ground sensor to confirm the aircraft is on or very near the ground before allowing deployment. This prevents an inadvertent in-flight deployment, which would be catastrophic."
 },
 {
  "section": "Engines",
  "question": "A green \"Rev\" light above N1 on the upper display indicates that the ____.",
  "answer": "thrust reverser is deployed",
  "explanation": "The reverser indication uses a two-stage color system: amber REV means the reverser is in transit (moving from stowed), and green REV means it is fully deployed and ready to provide reverse thrust. Green confirms it is safe to advance the reverse thrust lever beyond the idle detent."
 },
 {
  "section": "Engines",
  "question": "Each engine is equipped with _____ ignitors.",
  "answer": "2",
  "explanation": "Two igniters per engine provide redundancy for engine starting and for continuous ignition during operations in heavy rain, turbulence, or icing conditions. The EEC controls which igniter(s) fire during a start sequence and can activate both automatically during an auto-relight if a flameout is detected."
 },
 {
  "section": "Engines",
  "question": "What are the methods of inflight restarting?",
  "answer": "Windmill and crossbleed",
  "explanation": "Windmill restart uses the airflow through the engine at flight speed to spin the N2 rotor, eliminating the need for a pneumatic air source. Crossbleed restart uses bleed air from the operating engine to spin the starter on the failed engine. The EEC will display X-BLD when crossbleed start conditions are met based on altitude, airspeed, and N2."
 },
 {
  "section": "Engines",
  "question": "The Fuel Used readout is displayed ____.",
  "answer": "when the Fuel Flow Switch is moved to Used or Reset",
  "explanation": "Fuel flow is normally displayed full-time below the primary engine instruments. However, the cumulative fuel-used totalizer is a secondary readout that only appears when you actively select it with the Fuel Flow switch. RESET zeroes the counter for the next flight."
 },
 {
  "section": "Engines",
  "question": "The amber ENGINE CONTROL light functions on the ground below ____ KIAS prior to takeoff, or approximately _____ seconds after touchdown.",
  "answer": "80/30",
  "explanation": "The ENGINE CONTROL light is intentionally inhibited during the critical phases of flight (takeoff roll above 80 knots through landing rollout). It only functions on the ground at low speed so the crew is not distracted by a non-critical EEC alert during a high-workload phase when there is little they can do about it."
 },
 {
  "section": "Engines",
  "question": "How can you tell if the EECs are in the normal mode?",
  "answer": "The white ON is in view",
  "explanation": "The EEC switch has a small window that shows ON in white when normal mode is active. If the EEC degrades to soft alternate, you will also see the ALTN light illuminate alongside the ON indication. If it goes to hard alternate, the ON disappears and only ALTN is visible."
 },
 {
  "section": "Engines",
  "question": "The indication of a properly deployed thrust reverser after landing is a/an ___ displayed above N1.",
  "answer": "green REV",
  "explanation": "Amber REV means the reverser is still moving into position. Green REV confirms the translating sleeves are fully deployed and the blocker doors are directing fan air forward through the cascade vanes. You should not advance the reverse thrust lever beyond reverse idle until you see green."
 },
 {
  "section": "Engines",
  "question": "How is an EGT exceedance displayed after engine shutdown?",
  "answer": "A red box",
  "explanation": "When EGT exceeds its limit, the digital readout and dial turn red to alert the crew. After engine shutdown, this exceedance is preserved as a red box around the EGT value so maintenance can see that a limit was exceeded, even though the engine is no longer running."
 },
 {
  "section": "Engines",
  "question": "The EEC selects approach idle ____.",
  "answer": "inflight when the flaps are in landing configuration or engine anti-ice is turned on for either engine",
  "explanation": "Approach idle sets a higher minimum N1/N2 than flight idle. This is done so the engines can spool up faster for a go-around. The EEC selects it when landing flaps are set (flaps 15 or greater with gear down below 19,000 feet) or when cowl anti-ice is on, since both situations indicate the airplane is in a phase of flight where quick thrust response matters."
 },
 {
  "section": "Engines",
  "question": "The EGT digital readout and EGT round dial indications are red, indicating what?",
  "answer": "You have exceeded maximum EGT limits",
  "explanation": "The color coding system uses white for normal, amber for caution, and red for limit exceedance. When both the digital readout and the analog dial turn red, you have gone past the maximum EGT redline. Note that the EEC does NOT provide EGT redline protection in normal mode -- the crew must monitor EGT themselves."
 },
 {
  "section": "Engines",
  "question": "The EEC provides ____ protection in the normal mode.",
  "answer": "N1 and N2",
  "explanation": "In normal mode, the EEC provides overspeed protection for both the N1 (fan/low-pressure) and N2 (high-pressure) rotors by limiting fuel flow. Importantly, it does NOT provide EGT redline protection, which is why pilots must actively monitor EGT, especially during engine starts."
 },
 {
  "section": "Engines",
  "question": "The EEC will abort the engine start on the ground for ____.",
  "answer": "A: a wet start C: an impending hot start either A or C above",
  "explanation": "On the ground, the EEC has automatic start protection that monitors the start sequence for anomalies. A wet start (no EGT rise, meaning fuel is pooling without igniting) triggers a fuel shutoff after 15 seconds. A hot start (EGT rising too fast toward limits) triggers fuel and ignition cutoff. These protections only work on the ground -- they are NOT available for inflight starts."
 },
 {
  "section": "Engines",
  "question": "You will see an ENG FAIL alert ____.",
  "answer": "when N2 drops below 50% and the start lever is in IDLE",
  "explanation": "The 50% N2 threshold represents the minimum for sustainable idle operation. If N2 drops below that while the start lever is commanding fuel (IDLE position), the engine cannot sustain itself and the ENG FAIL alert triggers. It clears if the engine recovers above 50%, or if you move the start lever to CUTOFF, or if you pull the fire switch."
 },
 {
  "section": "Engines",
  "question": "The approximate engine starter cutout speed and the indication of engine starter cutout is ____.",
  "answer": "56% N2, Engine Start Switch moves to AUTO and START VALVE OPEN light extinguishes",
  "explanation": "On the NG (CFM56), the starter has done its job once N2 reaches about 56% -- the engine is self-sustaining at that point. The start switch automatically returns from GRD to AUTO, the bleed air start valve closes, and the START VALVE OPEN light goes out. On the MAX, this happens at about 63% N2 because the LEAP-1B has different spool-up characteristics."
 },
 {
  "section": "Engines",
  "question": "The engine thrust reversers are operated ____.",
  "answer": "hydraulically",
  "explanation": "The translating sleeves and blocker doors are moved by hydraulic actuators. Engine 1's reverser runs on System A hydraulics and Engine 2's reverser runs on System B, with the standby hydraulic system available as backup for both. This keeps each reverser on the same hydraulic system as its corresponding engine-driven pump."
 },
 {
  "section": "Engines",
  "question": "The cockpit indications of a thrust reverser malfunction are a Master Caution.",
  "answer": "ENG System Annunciator light, and REVERSER light",
  "explanation": "When the reverser position does not match the commanded state within about 10 seconds, the amber REVERSER light illuminates along with a Master Caution and the ENG system annunciator. This tells you there is a disagreement between where the reverser sleeve is and where the system thinks it should be."
 },
 {
  "section": "Engines",
  "question": "If a wet start is detected, the EEC aborts the start ____ seconds after the start lever is moved to IDLE.",
  "answer": "15",
  "explanation": "A wet start means fuel is being delivered but not igniting -- no EGT rise is detected. The EEC gives 15 seconds for ignition to occur after the start lever goes to IDLE. If there is still no EGT rise by then, the EEC shuts off fuel to prevent unburned fuel from pooling in the engine, which could cause a fire or explosion on a subsequent start attempt."
 },
 {
  "section": "Engines",
  "question": "Is it possible to use a reverser after landing with the REVERSER light on?",
  "answer": "Yes",
  "explanation": "The REVERSER light indicates a disagreement or malfunction in the auto-stow system, but it does not mean the reverser hardware is mechanically failed. During landing rollout, you can still command the reverser -- it should operate normally. The light is more about the stow-sequence logic than the deployment capability itself."
 },
 {
  "section": "Engines",
  "question": "Engine maximum and minimum limits are displayed in ____.",
  "answer": "red",
  "explanation": "The color coding convention is consistent across all engine instruments: white is normal operating range, amber is caution range, and red marks the maximum and minimum limits (redlines). If a parameter reaches the red arc or red digital value, you have hit or exceeded a limit."
 },
 {
  "section": "Engines",
  "question": "The ____ position provides ignition to selected igniter(s) when the engine is running and flaps are not UP.",
  "answer": "AUTO",
  "explanation": "With the ignition switch in AUTO, the EEC automatically activates continuous ignition when it senses conditions that could cause a flameout -- like flying with flaps extended (typically in rain, turbulence, or approach configurations). This is a hands-off convenience so the crew does not have to manually manage ignition."
 },
 {
  "section": "Engines",
  "question": "(MAX) Available N1 Thrust Ratings for LEAP-1B Engines are:",
  "answer": "28K with a 10% and 20% de-rate option.",
  "explanation": "The MAX's LEAP-1B engines are rated at 28,000 pounds of thrust (compared to the NG's 27,000). De-rate options of 10% and 20% allow reduced takeoff thrust for longer runways, which saves engine wear and can reduce noise. The specific rating is selected through the FMC/ACARS during takeoff performance calculations."
 },
 {
  "section": "Engines",
  "question": "(MAX) The EECs will shut down the engine for:",
  "answer": "Overspeed from exceeding engine structural design limits, both in flight and on the ground. OR ALSO: High Thrust event on the ground.",
  "explanation": "The MAX has two additional automatic shutdown protections that the NG does not have. EOS (Electronic Overspeed System) shuts off fuel if uncontrollable N2 overspeed is detected in flight to protect engine structure. TCMA (Thrust Control Malfunction Accommodation) shuts down the engine on the ground if it detects an asymmetric high-thrust event during the takeoff or landing roll to prevent a runway departure."
 },
 {
  "section": "Engines",
  "question": "(MAX) Bowed Rotor Motoring (BRM):",
  "answer": "Designed to straighten the rotor shaft which will naturally \u201cbow\u201d due to thermal buildup after the engine is shutdown.",
  "explanation": "After shutdown, hot spots in the engine cause the rotor to sag slightly as it cools unevenly -- this is called a bowed rotor. On the MAX, the EEC automatically motors the engine for 6-90 seconds (shown as MOTORING on the N2 gauge between 18-26% N2) before introducing fuel. This spins the rotor to straighten it out and prevents vibration damage on startup."
 },
 {
  "section": "Engines",
  "question": "(MAX) The REVERSER AIR/GRD light is illuminated when:",
  "answer": "Illuminated when reverser air/ground protection is lost.",
  "explanation": "The reverser system uses the air/ground logic to prevent in-flight deployment. If that protection circuit fails, the REVERSER AIR/GRD light illuminates to warn the crew that the safety interlock preventing airborne deployment may not be working. This is a MAX-specific annunciation."
 },
 {
  "section": "Engines",
  "question": "When the EEC displays the light to the right, with thrust levers not in idle, it indicates that the #1 EEC is in the _____ mode.",
  "answer": "Soft Alternate",
  "explanation": "Soft alternate mode is automatically entered when the EEC loses required sensor inputs. You will see the ALTN light illuminate but the white ON indication remains visible -- both are showing at the same time. The EEC continues using the last valid flight conditions it had, so there is no immediate thrust change, but ratings may drift as actual conditions change."
 },
 {
  "section": "Engines",
  "question": "In this mode, what parameters is the EEC using to control the # 1 engine?",
  "answer": "The last valid flight conditions that the EEC sensed before it went into the Soft Alternate mode.",
  "explanation": "When the EEC enters soft alternate, it has lost some of its sensor inputs, so it freezes the last known-good values and uses those for thrust calculations. This means thrust should not change immediately, but as actual conditions (altitude, temperature, airspeed) drift from those frozen values, the thrust setting may no longer be perfectly matched to what the crew expects."
 },
 {
  "section": "Engines",
  "question": "What protection is the EEC providing the #1 engine in this mode?",
  "answer": "Exceeding N1, N2 redline limits",
  "explanation": "In soft alternate mode, the EEC still provides N1 and N2 overspeed protection, just like normal mode. It has not lost the rotor speed sensors, so it can still prevent the rotors from exceeding structural limits. The key degradation is in thrust accuracy, not in overspeed protection."
 },
 {
  "section": "Engines",
  "question": "The number 1 engine EEC switch indicates \u201cALTN\u201d and the ON indication is out of view. This light indicates that the #1 EEC is in the ____ mode.",
  "answer": "Hard Alternate",
  "explanation": "The distinguishing feature of hard alternate is that ALTN is showing but the white ON is gone. This is a more degraded state than soft alternate. In hard alternate, the EEC uses a preprogrammed thrust schedule instead of calculated values, and importantly, it provides NO limiting protection -- thrust is always equal to or greater than normal mode for any given lever position."
 },
 {
  "section": "Engines",
  "question": "What action is required by the QRH to move the #1 EEC from the Soft to Hard Alternate (ALTN} mode?",
  "answer": "pressing the #1 EEC switch",
  "explanation": "You can also enter hard alternate by retarding the thrust lever to idle while in soft alternate, but the QRH-directed method is to manually press the EEC switch. This gives the crew deliberate control over the mode transition. Hard alternate uses a fixed thrust schedule and removes EEC limiting, so it is only done when soft alternate is not providing adequate control."
 },
 {
  "section": "Engines",
  "question": "What type of data is the EEC using to control the engine while in the Hard AL TN Mode? ____.",
  "answer": "A preprogrammed alternate mode thrust schedule.",
  "explanation": "Unlike normal mode (which calculates thrust from real-time sensor data) or soft alternate (which uses frozen last-valid data), hard alternate falls back to a fixed, preprogrammed thrust schedule baked into the EEC software. This is the most basic level of control and always produces thrust equal to or greater than normal mode, which is why you should only go to full forward thrust in an emergency to avoid overboost."
 },
 {
  "section": "Engines",
  "question": "If this light illuminates during flight. ______,",
  "answer": "The auto stow system has been activated",
  "explanation": "The REVERSER light in flight means the auto-stow system detected a potential reverser sleeve movement and automatically commanded it back to the stowed position. This is a safety feature to prevent any in-flight deployment. The reverser should remain safely stowed."
 },
 {
  "section": "Engines",
  "question": "During landing rollout, with this light illuminated, the reverser ______.",
  "answer": "should operate normally",
  "explanation": "The REVERSER light during rollout indicates a disagreement in the stow logic, but the actual reverser hardware is still functional. You can command reverse thrust and expect it to deploy and work normally. The light is about the monitoring/stow system, not the mechanical deployment capability."
 },
 {
  "section": "Engines",
  "question": "When this light is illuminated during landing rollout while the reverse lever is commanded stowed, you should _____",
  "answer": "expect this light to extinguish ten seconds after the thrust reverser is commanded to stow",
  "explanation": "The REVERSER light illuminates when the valve/sleeve position does not match the commanded state. Once you command stow, the system has up to 10 seconds to complete the stow sequence and verify agreement. If the light has not gone out within that window (12 seconds on NG), there may be a genuine malfunction."
 },
 {
  "section": "Engines",
  "question": "If this light illuminates during takeoff, above 80 knots and below 400 feet RA. ______.",
  "answer": "the Oil Filler Bypass light will only illuminate steadily",
  "explanation": "During the critical takeoff phase (above 80 knots through 400 feet RA), alerting is suppressed to avoid distracting the crew. The oil filter bypass light will illuminate steadily without the flashing attention-getter or master caution, so the crew can focus on flying the airplane and address the issue after reaching a safe altitude."
 },
 {
  "section": "Engines",
  "question": "If this light illuminates in flight above 400 feet RA, ______.",
  "answer": "all three indicators will flash for 10 seconds then the Oil Filter Bypass Light will remain illuminated",
  "explanation": "Above 400 feet RA, you are past the critical phase, so the full alerting sequence activates: the oil filter bypass light, master caution, and ENG system annunciator all flash together for 10 seconds to get your attention. After the flash period, the oil filter bypass light stays on steadily as a reminder that the filter is nearing bypass."
 },
 {
  "section": "Engines",
  "question": "This light indicates _____.",
  "answer": "impending bypass of oil filter",
  "explanation": "The oil filter bypass light warns that the oil filter is becoming clogged and the system is about to bypass the filter to maintain oil flow to critical engine components. Oil will still flow, but it will be unfiltered, which is a maintenance concern."
 },
 {
  "section": "Engines",
  "question": "If this light illuminates approximately 30 seconds after touchdown, ______.",
  "answer": "it should be written up in the log book, even if the light does go out after shutting #2 engine down",
  "explanation": "The ENGINE CONTROL light becomes active about 30 seconds after touchdown (below 80 KIAS). If it comes on at that point, it means the EEC has detected a fault. Even if it extinguishes after engine shutdown, the fault needs to be documented in the logbook so maintenance can investigate, because the EEC stores fault codes that need to be reviewed."
 },
 {
  "section": "Engines",
  "question": "If the #2 Engine control light illuminates in flight, what steps should be taken? ____",
  "answer": "The light is inhibited during flight.",
  "explanation": "The ENGINE CONTROL light is deliberately inhibited during flight to avoid distracting the crew with a non-actionable alert. It only functions on the ground below 80 KIAS before takeoff, or about 30 seconds after touchdown. If there is an actual EEC problem in flight, you would see it through the EEC mode annunciations (soft/hard alternate) instead."
 },
 {
  "section": "Engines",
  "question": "If this light illuminates during taxi, prior to takeoff. ______.",
  "answer": "return to the gate. Maintenance action is required",
  "explanation": "The ENGINE CONTROL light on the ground during taxi means the EEC has detected a significant fault. Since you have not yet committed to takeoff, the safe action is to return to the gate for maintenance. This is different from seeing it after landing, where you would just write it up -- before takeoff, you have the opportunity to get it fixed."
 },
 {
  "section": "APU",
  "question": "The APU provides ____.",
  "answer": "both electrical power and pneumatic air",
  "explanation": "The APU is a small gas turbine in the tail cone that serves two purposes: it drives a generator to produce AC electrical power, and it produces bleed air for engine starting and air conditioning packs. This makes it invaluable for ground operations without needing a ground power cart or air start unit."
 },
 {
  "section": "APU",
  "question": "The APU start cycle may take as long as ____.",
  "answer": "120 seconds",
  "explanation": "The APU start is a fully automatic sequence -- the inlet door opens, the starter spins it up, fuel and ignition are introduced. The entire cycle can take up to 2 minutes. If it has not started by then, the cycle terminates and the FAULT light illuminates, indicating the start attempt failed."
 },
 {
  "section": "APU",
  "question": "With the APU operating, turning OFF the battery switch will cause the APU to ____.",
  "answer": "shutdown immediately",
  "explanation": "The APU's fuel shutoff valve and control logic depend on DC power from the battery bus. If you turn off the battery switch, you remove power from the APU's control circuits, and it shuts down immediately without going through the normal 60-second cooling period. This is why the battery switch must be ON for APU operation."
 },
 {
  "section": "APU",
  "question": "Fire protection for the APU is provided by ____ fire extinguishing bottle(s).",
  "answer": "1",
  "explanation": "The APU compartment in the tail cone has a single fire extinguishing bottle. Unlike the engines which have two bottles that can be cross-shipped, the APU gets just one because it is a smaller, lower-risk installation. The APU also has automatic fire detection that triggers an automatic shutdown, but the extinguisher itself must be discharged manually."
 },
 {
  "section": "APU",
  "question": "The APU fire extinguishing agent discharges ____.",
  "answer": "manually only",
  "explanation": "While the APU has automatic fire detection and will automatically shut down if a fire is detected, the fire extinguisher bottle must be manually discharged by the crew. This is a deliberate design choice -- the system alerts you and stops fuel flow, but you decide whether to discharge the extinguishing agent."
 },
 {
  "section": "APU",
  "question": "The APU can be started with electrical power from ____.",
  "answer": "AC Transfer Bus 1 or the airplane battery",
  "explanation": "The APU needs electrical power to run its starter motor and control logic. On a powered airplane, it draws from AC Transfer Bus 1. On a cold, dark airplane with no external power, the aircraft battery provides enough juice to start the APU. This is why the battery is the first thing you turn on during a cold-dark setup."
 },
 {
  "section": "APU",
  "question": "With the APU blue MAINT light illuminated, the crew ____.",
  "answer": "may continue to use the APU if needed",
  "explanation": "The blue MAINT light is informational only -- it tells maintenance there is something to look at, but it does not indicate a condition that affects safe APU operation. The crew can continue using the APU for electrical power and bleed air as needed."
 },
 {
  "section": "APU",
  "question": "The APU EGT is displayed on the ____.",
  "answer": "forward overhead panel",
  "explanation": "The APU controls and indications are grouped together on the forward overhead panel, including the EGT gauge, start switch, and various annunciator lights. The EGT display remains visible for 5 minutes after APU shutdown so you can monitor the cool-down."
 },
 {
  "section": "APU",
  "question": "In order to start the APU on a cold, dark airplane, the ____.",
  "answer": "battery switch must be ON, the cockpit APU fire handle must be IN, and the ground control panel fire handle must be IN",
  "explanation": "All three conditions must be met: the battery provides the electrical power to run the start sequence, and both fire handles (cockpit and ground control panel) must be in their normal IN position. If either fire handle is pulled, it cuts off fuel to the APU as a fire protection measure, which would prevent a start."
 },
 {
  "section": "APU",
  "question": "The APU can be started at altitudes up to ____ feet.",
  "answer": "41,000",
  "explanation": "The APU is certified to start and operate up to the aircraft's maximum certified altitude of 41,000 feet. However, its bleed air and electrical capabilities diminish with altitude -- bleed plus electrical is only available up to 10,000 feet, bleed only up to 17,000 feet, and battery-only start attempts are not recommended above 25,000 feet."
 },
 {
  "section": "APU",
  "question": "The APU Start Switch has ____ positions labeled.",
  "answer": "OFF, ON, and START",
  "explanation": "OFF initiates shutdown with a 60-second cooling period. ON is the normal running position. START is a momentary position that initiates the automatic start sequence and springs back to ON. You push it to START, release it, and the APU does the rest automatically."
 },
 {
  "section": "APU",
  "question": "The maximum altitude for use of APU bleed air and electrical power is _____ feet.",
  "answer": "10,000",
  "explanation": "At higher altitudes the thinner air reduces the APU's power output. Up to 10,000 feet it can handle the full load of both bleed air and electrical generation simultaneously. Above that, the available bleed air or electrical capacity drops off, so the limits are tiered by altitude."
 },
 {
  "section": "APU",
  "question": "The maximum altitude for use of APU bleed air only is _____ feet.",
  "answer": "17,000",
  "explanation": "Between 10,000 and 17,000 feet the APU can still produce enough bleed air to run one pack or assist with engine starting, but it cannot simultaneously handle the electrical load. Above 17,000 feet, the air is too thin for adequate bleed output, so the APU is limited to electrical power only."
 },
 {
  "section": "APU",
  "question": "If airborne and the battery is the only available power source, APU start attempts are not recommended above ____ feet.",
  "answer": "25,000",
  "explanation": "At high altitude the thinner air makes APU starting harder, requiring more starter cranking time. If the battery is your only power source, it may not have enough capacity to sustain the longer start attempt needed above 25,000 feet, plus you want to preserve battery power for essential instruments and communications."
 },
 {
  "section": "APU",
  "question": "On the ground, the APU ____.",
  "answer": "will power both transfer busses",
  "explanation": "On the ground, the APU generator can power both AC transfer buses, which in turn supply the entire aircraft electrical system. This is what allows you to run avionics, lights, packs, and other systems at the gate without external power or engines running."
 },
 {
  "section": "APU",
  "question": "After 3 consecutive aborted start attempts on the APU, how long of a cooling period must be observed?",
  "answer": "15 mins",
  "explanation": "Each failed start attempt heats up the APU starter and internal components. After three consecutive failures, a 15-minute cooling period is required to prevent thermal damage to the starter motor and other components before trying again."
 },
 {
  "section": "APU",
  "question": "(MAX) The blue MAINT light:",
  "answer": "DOOR light has replaced the MAINT light on the control panel.",
  "explanation": "On the MAX, the APU inlet door has a more complex design with three positions (closed, flight open at about 17 degrees, and ground open at about 45 degrees). Boeing replaced the MAINT light with a DOOR light to give the crew visibility into the inlet door status, since the door now transitions automatically at liftoff and touchdown."
 },
 {
  "section": "APU",
  "question": "Which of the following will cause the APU to shut down?",
  "answer": "a. Overspeed b. High oil temperature c. Fault d. All of the above",
  "explanation": "The APU has several automatic shutdown protections to prevent damage. Overspeed, high oil temperature, and various fault conditions (low oil pressure after start, electrical faults, etc.) all trigger an automatic shutdown. The corresponding amber annunciator light illuminates to tell you which condition caused it."
 },
 {
  "section": "APU",
  "question": "You observe these lights on after starting the APU, and they were not on prior to start. Which statement is the most correct?",
  "answer": "The APU had an overspeed fault and shut down automatically.",
  "explanation": "If both the OVERSPEED and FAULT lights illuminate after a start attempt, it means the APU reached an excessive RPM during the start sequence and the protection system triggered an automatic shutdown. The FAULT light confirms the automatic shutdown occurred, and the OVERSPEED light tells you the specific reason."
 },
 {
  "section": "APU",
  "question": "If this light came on shortly after placing the APU start switch to OFF, __.",
  "answer": "the overspeed shutdown protection feature has failed a self-test during a normal APU shutdown",
  "explanation": "During a normal APU shutdown sequence, the overspeed protection system runs a self-test. If that self-test fails, the OVERSPEED light illuminates to alert maintenance that the protective system itself needs repair. This is different from an actual overspeed event -- it is the safety net testing itself and finding a problem."
 },
 {
  "section": "APU",
  "question": "After shutting off the APU that has an illuminated Overspeed light, the light will __.",
  "answer": "remain on for five minutes and then extinguish",
  "explanation": "The OVERSPEED light stays on for 5 minutes after shutdown as a maintenance flag so ground crews can see that an overspeed event occurred, even if they arrive at the airplane a few minutes after shutdown. After 5 minutes it extinguishes, but the event is recorded in the APU's maintenance memory. This is the same 5-minute window during which the APU EGT remains displayed."
 },
 {
  "section": "Fuel",
  "question": "When fuel is stored in the center and main tanks, both engines operating, all boost pumps on, fuel is supplied to the engines from ____.",
  "answer": "the center tank",
  "explanation": "The center tank pumps are designed to produce higher pressure than the main tank pumps. So when all six pumps are running, the center tank's higher pressure wins out and feeds both engines first. The main tank fuel sits behind check valves until the center tank empties and its pumps auto-shutoff."
 },
 {
  "section": "Fuel",
  "question": "The main fuel tanks are serviced through ____.",
  "answer": "a single point refueling receptacle",
  "explanation": "A single point refueling receptacle allows all three tanks to be filled from one connection point on the aircraft, which speeds up ground turnaround. The fueling system distributes fuel to the center and main tanks through internal valving from this single connection."
 },
 {
  "section": "Fuel",
  "question": "Each engine can be fed fuel from either or both main tanks through the fuel _____ valve.",
  "answer": "crossfeed",
  "explanation": "The crossfeed valve connects the left and right fuel feed lines. Normally it is closed so each engine feeds from its own side. When opened, it allows one tank's pumps to supply both engines -- useful if you lose pumps on one side or need to balance fuel. However, running crossfeed open causes a progressive fuel imbalance since one tank is feeding two engines."
 },
 {
  "section": "Fuel",
  "question": "With all fuel pumps ON, why does the center tank provide the fuel to the engines?",
  "answer": "The center tank pumps provide more pressure.",
  "explanation": "This is a deliberate design feature. By making the center tank pumps output higher pressure than the main tank pumps, the system automatically feeds center tank fuel first without any crew action or complex sequencing logic. It is an elegant way to burn the center tank down first and keep wing fuel for structural relief and balance."
 },
 {
  "section": "Fuel",
  "question": "With fuel pumps turned OFF, the APU fuel is suction-fed from ____.",
  "answer": "the No. 1 main tank",
  "explanation": "The APU has a dedicated suction line connected to main tank No. 1 (left wing). When no AC fuel pumps are running -- such as on a cold dark airplane running on battery -- the APU can still draw fuel via suction from this tank. This is why the APU can be started without any other systems running."
 },
 {
  "section": "Fuel",
  "question": "Pulling a fire handle or placing an engine start lever in CUTOFF closes ____.",
  "answer": "both the spar fuel shutoff valve and the engine fuel shutoff valve",
  "explanation": "There are two fuel shutoff valves in series for each engine: the spar valve (at the wing station) and the engine high-pressure shutoff valve (on the engine). Both the fire handle and the CUTOFF position close both valves to completely cut fuel supply. This dual-valve design provides redundancy -- if one valve fails to close, the other still stops fuel flow."
 },
 {
  "section": "Fuel",
  "question": "The Center Tank Scavenge Pump will activate when ____.",
  "answer": "#1 Main Tank is about half full",
  "explanation": "The scavenge jet pump is powered by fuel flow from the main tank No. 1 forward pump. It activates when main tank 1 drops to about half full, and it transfers any remaining unusable center tank fuel into main tank 1. This recovers fuel that the center tank pumps could not pick up, improving fuel efficiency."
 },
 {
  "section": "Fuel",
  "question": "How many positions are there on the fuel flow/rate used switch?",
  "answer": "Three - RESET, RATE, USED",
  "explanation": "RATE displays the current fuel flow rate to each engine (the default full-time display). USED shows cumulative fuel burned since last reset. RESET zeroes the fuel-used totalizer for the next flight. This gives the crew flexibility to monitor either instantaneous flow or total consumption."
 },
 {
  "section": "Fuel",
  "question": "A bright blue Crossfeed VALVE OPEN Light means the Crossfeed Valve is ____.",
  "answer": "in transit or the valve position and CROSSFEED Selector disagree",
  "explanation": "The crossfeed valve light uses a three-state indication: extinguished means closed, dim blue means open, and bright blue means either the valve is moving between positions or there is a disagreement between the switch position and actual valve position. A bright light that does not go dim or extinguish indicates a potential valve malfunction."
 },
 {
  "section": "Fuel",
  "question": "An amber FILTER BYPASS Light means ____.",
  "answer": "impending fuel filter bypass due to a contaminated filter",
  "explanation": "The fuel filter removes contaminants before fuel reaches the engine. If the filter becomes clogged, a differential pressure switch detects the increased pressure drop and illuminates the amber light warning of impending bypass. The system will eventually bypass the filter entirely to maintain fuel flow, but with unfiltered fuel going to the engine."
 },
 {
  "section": "Fuel",
  "question": "The Fuel Flow Used readout is updated for the next flight ____.",
  "answer": "by use of the FUEL FLOW Switch moved to RESET",
  "explanation": "The fuel-used totalizer accumulates fuel burned throughout the flight. Between flights, the crew moves the switch to RESET to zero out the counter so the next crew starts with a fresh fuel-used reading. Without resetting, the totalizer would show cumulative fuel from previous flights."
 },
 {
  "section": "Fuel",
  "question": "IMBAL means that the main tanks differ by more than _____ pounds.",
  "answer": "1,000",
  "explanation": "A fuel imbalance of more than 1,000 pounds between the main tanks triggers the IMBAL alert because it creates a lateral weight asymmetry that requires trim correction and wastes fuel. The alert clears at 200 pounds difference, giving a comfortable margin so it does not flicker on and off near the threshold."
 },
 {
  "section": "Fuel",
  "question": "CONFIG means that either engine is running and the fuel in the center tank is more than _____ pounds and both center tank pumps are producing _____ pressure.",
  "answer": "1,600/low",
  "explanation": "The CONFIG alert catches a potentially dangerous misconfiguration: the center tank has significant fuel (over 1,600 pounds) but both center tank pumps are off. This means the engines are burning main tank fuel while center tank fuel sits unused, which defeats the designed fuel burn sequence and wastes the center-first weight advantage."
 },
 {
  "section": "Fuel",
  "question": "Will the CONFIG, IMBAL, or LOW annunciation on the fuel gauges cause the MASTER CAUTION lights to flash?",
  "answer": "No",
  "explanation": "These fuel quantity alerts (CONFIG, IMBAL, LOW) are displayed as text annunciations on the fuel quantity display itself but do not trigger the master caution system. They are advisory-level alerts that the crew should notice during their routine scan of the fuel gauges. The Fuel LOW alert does trigger on the fuel display but not through master caution."
 },
 {
  "section": "Fuel",
  "question": "The Fuel LOW Alert indicates fuel quantity in the related main tank is less than _______ pounds.",
  "answer": "2,000",
  "explanation": "The 2,000-pound threshold for Fuel LOW is a significant warning that you are getting critically low on fuel in that main tank. It clears at 2,500 pounds to provide hysteresis. At this point, the crew should be actively managing fuel and verifying they can reach their destination or divert."
 },
 {
  "section": "Fuel",
  "question": "The maximum fuel temperature is ____ degrees C.",
  "answer": "49",
  "explanation": "Fuel temperature is limited to 49 degrees Celsius because hotter fuel has more dissolved vapor, which increases the risk of vapor lock and fuel system cavitation. It also affects fuel density and therefore the accuracy of fuel quantity measurements. The fuel temperature gauge on the overhead panel monitors main tank No. 1."
 },
 {
  "section": "Fuel",
  "question": "Random fuel imbalance between main tanks must not exceed ____ pounds for taxi, takeoff, flight, or landing.",
  "answer": "1,000",
  "explanation": "This 1,000-pound limit matches the IMBAL alert threshold. A lateral imbalance beyond this creates enough asymmetric weight that it requires significant aileron trim, which increases drag and fuel burn. Keeping the imbalance below 1,000 pounds ensures the airplane remains within normal handling characteristics."
 },
 {
  "section": "Fuel",
  "question": "The Nitrogen Generation System (NGS) Operability Indicator is located in the right wheel well. If the Degraded (blue) light is illuminated, it indicates ____________________.",
  "answer": "NGS is operational, but is operating in a degraded condition, make an E-6 entry",
  "explanation": "The NGS reduces flammability in the center tank by filling it with nitrogen-enriched air. The system is transparent to the crew with no cockpit indications -- the indicator panel is in the right main wheel well for maintenance access only. A blue DEGRADED light means the system is still working but not at full capacity, warranting a maintenance logbook entry."
 },
 {
  "section": "Fuel",
  "question": "(MAX) An illuminated FUEL FLOW light alerts the crew of:",
  "answer": "Difference between the actual engine fuel flow rate and the FMC expected fuel flow rate. OR ALSO: FMC expected fuel flow rate exceeds a pre-determined threshold value for 5 consecutive minutes",
  "explanation": "This MAX-only alert compares what the engines are actually burning against what the FMC predicts they should be burning. If the difference exceeds a threshold for 5 continuous minutes, the amber light illuminates. This could indicate a fuel leak, incorrect FMC data, or engine performance degradation. The 5-minute delay prevents nuisance alerts from brief transients."
 },
 {
  "section": "Fuel",
  "question": "(MAX) An amber FUEL DISAGREE message:",
  "answer": "Displayed when there is a disagreement between the FMS calculated and the measured fuel for 5 continuous minutes.",
  "explanation": "The FMS tracks fuel two ways: measuring it directly with tank sensors and calculating it from known fuel flow. If these two numbers disagree for 5 continuous minutes, the FUEL DISAGREE message appears. This helps the crew identify whether they have a fuel quantity indication problem or a fuel leak."
 },
 {
  "section": "Fuel",
  "question": "The Fuel Control Panel is configured as shown. The center tank is empty and both main tank fuel quantities are above 8000 lbs. How does this affect the current operation of the fuel system?",
  "answer": "No effect. The #1 Main Tank AFT pump pressure is sufficient to supply the engine.",
  "explanation": "Each main tank has two pumps (forward and aft). If one pump fails or is switched off, the remaining pump provides enough pressure to feed the engine normally. With the center tank empty, fuel is coming from the main tanks anyway. A single operating pump per tank is sufficient for normal engine operation."
 },
 {
  "section": "Fuel",
  "question": "The aircraft is in level cruise flight, and all fuel tank pump switches are ON. Both main tanks are full, and usable center tank fuel is 7000 lbs. All other conditions are normal. Which statement is valid with this light illuminated?",
  "answer": "The #1 Main Fuel Tank is now supplying fuel to the #1 engine.",
  "explanation": "If a center tank low pressure light illuminates with fuel still in the center tank, it means that pump has lost output pressure. With the left center tank pump failed, the right center pump can only feed the right engine (since the crossfeed is closed). The left engine transitions to its main tank supply, so main tank No. 1 starts feeding engine No. 1."
 },
 {
  "section": "Fuel",
  "question": "The aircraft is in level cruise flight, and all fuel tank pump switches are ON. Both main tanks are full, and usable center tank fuel is 7000 lbs. If no action is taken, what will happen to the fuel quantity in each main tank?",
  "answer": "The #1 Main Tank fuel quantity will start to decrease, and the #2 Main Tank fuel quantity will remain constant.",
  "explanation": "With the left center pump failed and crossfeed closed, engine 1 is burning from main tank 1 while engine 2 is still burning from the center tank (via the working right center pump). So main tank 1 decreases while main tank 2 stays full. This will eventually create a fuel imbalance if the crew does not take corrective action."
 },
 {
  "section": "Fuel",
  "question": "Review the appropriate QRH procedure. It states if one center tank Low Pressure Light is illuminated, the Crossfeed Selector should be placed in open. Why is this action directed by the QRH?",
  "answer": "To prevent a fuel quantity imbalance.",
  "explanation": "Opening the crossfeed connects both engine fuel feed lines. With one center pump feeding the manifold, that pump's fuel can now reach both engines. This prevents the asymmetric burn situation where one engine feeds from a main tank while the other feeds from the center tank, which would cause an imbalance."
 },
 {
  "section": "Fuel",
  "question": "With the airplane in flight, what does it mean when this light illuminates?",
  "answer": "An impending fuel filter bypass on #1 engine.",
  "explanation": "The amber FILTER BYPASS light means the fuel filter is becoming clogged with contaminants and the differential pressure across it is rising. The bypass mechanism is about to route fuel around the filter to maintain flow. On the NG, this indicates impending bypass; on the MAX, it can mean impending or actual bypass."
 },
 {
  "section": "Fuel",
  "question": "The aircraft is in level cruise flight with this light illuminated. Both main tanks are full, and usable center tank fuel is 5000 lbs. All other conditions are normal. Which statement is valid?",
  "answer": "Both engines will continue to feed from the Center Fuel Tank.",
  "explanation": "A crossfeed VALVE OPEN dim blue light means the crossfeed valve is open. With 5,000 lbs still in the center tank and both center pumps running, the higher-pressure center tank pumps still supply both engines regardless of crossfeed position. The crossfeed being open does not change the fuel source as long as the center tank pumps are overpowering the main tank pumps."
 },
 {
  "section": "Fuel",
  "question": "At the moment this Low Pressure light illuminated, which of the following statements is also true?",
  "answer": "The Center Tank Scavenge Jet Pump system will no longer operate if needed.",
  "explanation": "The center tank scavenge jet pump is powered by fuel flow from the main tank No. 1 forward pump. If that pump's low pressure light illuminates (meaning the pump has failed or been turned off), there is no motive flow to drive the scavenge pump. So any residual fuel in the center tank cannot be transferred to main tank 1."
 },
 {
  "section": "Fuel",
  "question": "During engine start, with the #1 engine start lever in the idle position, the \u201cENG VALVE CLOSED\u201d light illuminates. What does this mean?",
  "answer": "The engine valve is closed.",
  "explanation": "When the start lever is at IDLE, the engine fuel shutoff valve should be open to allow fuel to the engine. If the ENG VALVE CLOSED light illuminates (blue dim means closed), the valve has not opened or has closed unexpectedly. On the MAX, this can briefly occur during the TCMA/EOS logic test right before fuel introduction, which is normal. Otherwise, it indicates a valve problem."
 },
 {
  "section": "Fuel",
  "question": "What of the following statements is true with the depicted condition?",
  "answer": "The #1 engine will not start.",
  "explanation": "If the engine fuel shutoff valve is closed while the start lever is at IDLE, no fuel can reach the combustion chamber. Without fuel, there can be no ignition and the engine will simply motor without starting. The crew needs to identify why the valve is not opening before attempting another start."
 },
 {
  "section": "Fuel",
  "question": "What action should be taken?",
  "answer": "Move the start lever to cutoff and motor the engine for 60 seconds.",
  "explanation": "If fuel was introduced but did not ignite (or the valve opened briefly then closed), there may be unburned fuel pooled in the engine. Moving the start lever to CUTOFF ensures fuel is shut off, and motoring the engine for 60 seconds blows the residual fuel out through the tailpipe. This prevents a hot start or fire on the next start attempt."
 },
 {
  "section": "Fuel",
  "question": "What could cause this light to illuminate?",
  "answer": "Solid contaminants blocking the fuel filter.",
  "explanation": "The FILTER BYPASS light is triggered by a differential pressure switch across the fuel filter. When solid contaminants like dirt, debris, or ice crystals accumulate on the filter element, they restrict flow and increase the pressure drop. Once that pressure drop exceeds the threshold, the light illuminates to warn of impending or actual bypass."
 },
 {
  "section": "Fuel",
  "question": "What action should be taken in flight when this light illuminates?",
  "answer": "No action required unless both Filter Bypass lights illuminate.",
  "explanation": "A single FILTER BYPASS light means one engine's fuel filter is becoming clogged, but the engine is still getting fuel. The bypass mechanism ensures fuel flow continues. No immediate action is needed because the engine will keep running. However, if both engines show filter bypass, it could indicate contaminated fuel affecting the entire supply, which warrants further investigation."
 },
 {
  "section": "Fuel",
  "question": "Why is there an IMBAL indication under the number 1 fuel quantity?",
  "answer": "There is more than 1000 lbs difference between the main tank.",
  "explanation": "The IMBAL annunciation appears on the fuel quantity display when the system detects more than a 1,000-pound difference between the two main tanks. It appears under the tank with the lower quantity to direct the crew's attention to which side is low. The crew should investigate the cause and correct the imbalance."
 },
 {
  "section": "Fuel",
  "question": "What effect would this have on the Master Caution system?",
  "answer": "There is no Master Caution with this indication.",
  "explanation": "The IMBAL annunciation on the fuel quantity display is a standalone advisory that does not trigger the master caution lights or the FUEL annunciator panel. It is simply text on the fuel gauge. The crew is expected to catch it during routine instrument scans, which is why regularly checking fuel state is part of the standard monitoring practice."
 },
 {
  "section": "Fuel",
  "question": "How would the crew correct this imbalance condition?",
  "answer": "Turn the left center tank pump back on or turn the right center tank pump off.",
  "explanation": "If the imbalance is caused by one center tank pump being off while the other is on, one engine burns center fuel while the other burns main tank fuel, creating asymmetric burn. Restoring symmetric operation -- either by turning the off pump back on (so both engines burn center fuel) or turning the running pump off (so both burn main tank fuel) -- stops the imbalance from growing."
 },
 {
  "section": "Fuel",
  "question": "The crew moves the cross-feed valve to open and the left center tank pump switch to OFF. If the cross-feed VALVE OPEN light illuminates and remains bright:",
  "answer": "The cross-feed valve failed in the closed position",
  "explanation": "A bright blue crossfeed VALVE OPEN light means the valve is either in transit or there is a disagreement between the commanded and actual valve position. If it stays bright and never goes dim (which would indicate fully open), the valve is stuck and did not actually open. The crossfeed is still effectively closed, so the intended fuel management strategy will not work."
 },
 {
  "section": "Fuel",
  "question": "With the Left Center Tank pump switch off and the CROSSFEED valve closed, what effect will this condition have on the fuel burned?",
  "answer": "The center tank will feed the number 2 engine, and the number 1 main tank will feed the number 1 engine",
  "explanation": "With the left center pump off and crossfeed closed, only the right center pump is running. It feeds engine 2 with center tank fuel at higher pressure. Engine 1 has no center tank supply on its side, so it defaults to its main tank pumps. This creates an asymmetric fuel burn -- the left main decreases while the right main stays full."
 },
 {
  "section": "Fuel",
  "question": "With the Left Center Tank pump switch off and the CROSSFEED valve closed, what action will be required to prevent a fuel imbalance?",
  "answer": "Turn the left center tank pump back on or turn the right center tank pump off",
  "explanation": "The imbalance occurs because the two engines are drawing from different tanks. To fix it, you need to restore symmetric feeding. Either turn the left center pump back on so both engines burn center fuel, or turn the right center pump off so both engines burn their respective main tank fuel. Either way, the burn rate becomes equal on both sides."
 },
 {
  "section": "Hydraulics",
  "question": "The hydraulic systems on the 737 are designated as ____.",
  "answer": "System A, System B, and Standby",
  "explanation": "The 737 uses three independent hydraulic systems to provide redundancy. Systems A and B are the primary workhorses, each driven by an engine-driven pump and an electric pump, while Standby is a backup that kicks in when the primaries fail. This triple-system design means you can lose any one system and still fly the airplane safely."
 },
 {
  "section": "Hydraulics",
  "question": "Normal hydraulic system pressure is ____ psi.",
  "answer": "3000",
  "explanation": "All three hydraulic systems operate at a normal pressure of 3,000 psi, with a maximum allowable pressure of 3,500 psi. This is a standard pressure for transport-category aircraft hydraulic systems and provides the force needed to move flight controls, landing gear, and other heavy-duty components."
 },
 {
  "section": "Hydraulics",
  "question": "Which of the following components are normally powered by Hydraulic System A?",
  "answer": "Nosewheel steering (normal)",
  "explanation": "System A handles normal nosewheel steering along with landing gear, alternate brakes, ground spoilers, the No. 1 thrust reverser, and Autopilot A. A good memory aid is that System A is tied to the left side of the airplane -- engine 1, the captain's tiller for steering, and normal gear operation."
 },
 {
  "section": "Hydraulics",
  "question": "Which of the following components are normally powered by System B?",
  "answer": "Trailing Edge Flaps",
  "explanation": "System B is the only system that powers trailing edge flaps under normal operations. It also runs leading edge devices, normal brakes, the yaw damper, autoslats, and the No. 2 thrust reverser. If you lose System B, you lose all normal flap operation and must use the alternate flaps system."
 },
 {
  "section": "Hydraulics",
  "question": "If either System A or System B is lost, the remaining system can power ____ with no decrease in airplane controllability.",
  "answer": "the primary flight controls",
  "explanation": "This is a critical design feature of the 737. Ailerons, elevators, and rudder are all powered by both System A and System B simultaneously. So if one system fails completely, the other system alone maintains full authority over all primary flight controls with no degradation in handling."
 },
 {
  "section": "Hydraulics",
  "question": "Turning Engine 1 or Engine 2 Hydraulic Pump Switches OFF ____.",
  "answer": "blocks pump pressure output to the components",
  "explanation": "The engine hydraulic pump switches control a blocking valve, not the pump itself. The pump physically continues to spin as long as the engine is running because it is mechanically driven by the engine gearbox. The switch simply blocks the pressurized fluid from reaching downstream components."
 },
 {
  "section": "Hydraulics",
  "question": "Moving a FLT CONTROL switch to the STBY RUD position ____.",
  "answer": "activates the Standby Pump OR ALSO: extinguishes the Flight Control LOW PRESSURE light when the Standby Rudder Shutoff Valve opens",
  "explanation": "Selecting STBY RUD does three things: it turns on the standby pump, closes the associated flight control shutoff valve to isolate the failed system from the primary flight controls, and opens the standby rudder shutoff valve to route standby hydraulic pressure to the rudder. The LOW PRESSURE light goes out because the standby system is now providing rudder pressure."
 },
 {
  "section": "Hydraulics",
  "question": "How are System A and B reservoirs pressurized?",
  "answer": "Bleed air",
  "explanation": "The reservoirs for Systems A and B are pressurized using engine bleed air. This pressurization ensures that fluid is positively pushed to the pump inlets, preventing cavitation at altitude where ambient pressure is low. The Standby reservoir does not need separate pressurization because it is connected to the System B reservoir."
 },
 {
  "section": "Hydraulics",
  "question": "Main Hydraulic System A or B pressure is generated by ____.",
  "answer": "both an AC electric motor-driven pump and an engine-driven pump",
  "explanation": "Each main system has two pressure sources for redundancy. The engine-driven pump is the primary workhorse, providing about six times the fluid volume of the electric pump. The AC electric motor-driven pump serves as a backup and is also used for ground operations when engines are not running."
 },
 {
  "section": "Hydraulics",
  "question": "An engine-driven hydraulic pump supplies approximately _____ times the fluid of an electric motor-driven pump.",
  "answer": "6",
  "explanation": "The engine-driven pump moves roughly six times the volume of hydraulic fluid compared to the electric pump. This matters operationally because if you lose the engine-driven pump, the electric pump can still maintain pressure but at reduced flow. High-demand operations like gear retraction will happen more slowly on the electric pump alone."
 },
 {
  "section": "Hydraulics",
  "question": "To block hydraulic fluid flow to the engine driven pump, ____.",
  "answer": "pull the respective engine Fire Handle",
  "explanation": "Pulling the fire handle is the only way to physically stop fluid from flowing to the engine-driven pump. Remember, the engine pump switch only closes a blocking valve on the output side. Pulling the fire handle shuts off the supply line, which is important during an engine fire to prevent hydraulic fluid from feeding the fire."
 },
 {
  "section": "Hydraulics",
  "question": "Heat exchangers used for cooling hydraulic fluid are located ____.",
  "answer": "in Main Fuel Tank #1 for System A OR ALSO: in Main Fuel Tank #2 for System B",
  "explanation": "Hydraulic fluid gets hot from the work of pressurizing and moving components, so heat exchangers cool it by routing it through the fuel tanks. System A's heat exchanger is in fuel tank 1 (left side, like engine 1), and System B's is in fuel tank 2 (right side, like engine 2). This is why there is a minimum fuel requirement of 1,675 lbs in the related tank for ground electric pump operation -- the fuel acts as a heat sink."
 },
 {
  "section": "Hydraulics",
  "question": "With System A fluid level at the top of the standpipe, the reservoir quantity displayed indicates approximately ____ % full.",
  "answer": "20",
  "explanation": "The standpipe in System A acts like a straw that sits above the bottom of the reservoir. If a leak drains fluid from the engine-driven pump circuit, fluid drops to the standpipe level and stops, leaving about 20% remaining. That trapped fluid is reserved for the electric pump to use, so you still have System A pressure from the electric pump even with an engine pump leak."
 },
 {
  "section": "Hydraulics",
  "question": "With fluid level at the top of the standpipe, fluid remaining in the System B reservoir is sufficient for operation of the ____.",
  "answer": "Power Transfer Unit",
  "explanation": "System B has only one standpipe that feeds both pumps, so any leak drains the reservoir to near zero and you lose System B pressure. However, the small amount of fluid trapped at the standpipe level is still enough for the PTU to work. This is an important design feature because the PTU can use System A pressure to move that remaining System B fluid to power leading edge devices."
 },
 {
  "section": "Hydraulics",
  "question": "The purpose of the Power Transfer Unit (PTU) is to ____.",
  "answer": "supply hydraulic fluid volume needed to operate autoslats and leading edge flaps and slats",
  "explanation": "The PTU exists specifically because leading edge devices and autoslats are powered only by System B. If the System B engine-driven pump fails, the PTU uses System A pressure to drive a pump that pressurizes System B fluid at a normal rate for these critical devices. Importantly, it transfers power, not fluid -- the two systems remain hydraulically isolated."
 },
 {
  "section": "Hydraulics",
  "question": "The Power Transfer Unit (PTU) in A/C 3AA-3LB operates automatically when ____.",
  "answer": "a. System B engine-driven pump pressure drops below limits b. airborne c. flaps are less than 15 degrees but not up d. all of the above occur",
  "explanation": "All three conditions must be met simultaneously for the PTU to activate on NG aircraft (3AA-3LB). It only cares about the engine-driven pump, not the electric pump. The flap position logic ensures the PTU activates when leading edge devices would be in transition -- they move with flaps between up and 15 degrees on the NG. On MAX aircraft, the condition is simply flaps not up."
 },
 {
  "section": "Hydraulics",
  "question": "The Landing Gear Transfer Unit operates when ____.",
  "answer": "airborne and No. 1 engine RPM drops below a limit value the landing gear lever is positioned UP and a main gear is not up and locked both of the above occur",
  "explanation": "The landing gear transfer valve uses System B engine-driven pump pressure to supply volume for gear retraction when the System A engine-driven pump (engine 1) is not available. All four conditions must exist: airborne, engine 1 RPM low, gear lever UP, and at least one main gear not yet up and locked. This ensures gear retraction is still possible after an engine 1 failure."
 },
 {
  "section": "Hydraulics",
  "question": "The automatic operation of the Standby Hydraulic System is initiated when all the following conditions exist:",
  "answer": "Loss of system A or B pressure, flaps extended, airborne, and wheel speed greater than 60 knots.",
  "explanation": "The standby system auto-activates only when you are in a vulnerable configuration -- flaps out (likely in the approach or departure phase) and airborne or rolling fast. The 60-knot wheel speed threshold covers the rejected takeoff case where you are still on the ground but going fast. Additionally, the relevant FLT CONTROL switch must be ON. The standby system can also auto-activate if the Force Fight Monitor detects a PCU hardover."
 },
 {
  "section": "Hydraulics",
  "question": "The Standby Hydraulic System LOW QUANTITY Light illuminates when the reservoir is ____.",
  "answer": "approximately 1/2 empty",
  "explanation": "The standby reservoir is fed from System B's reservoir. When the standby LOW QUANTITY light comes on at half empty, it tells you there is a leak in the standby system. The good news is that a standby leak does not affect System B operation -- the B reservoir stabilizes at about 70% and continues working normally."
 },
 {
  "section": "Hydraulics",
  "question": "If a leak develops in Hydraulic System A engine-driven pump or its related lines, a ____ in the reservoir prevents a total system fluid loss.",
  "answer": "standpipe",
  "explanation": "The standpipe is a tube inside the reservoir that separates the fluid supply for the engine-driven pump from the electric pump. If the engine pump circuit springs a leak, fluid drains out until it reaches the standpipe level (about 20%), then stops. The electric pump draws from above the standpipe, so it still has fluid to maintain System A pressure for the remaining components."
 },
 {
  "section": "Hydraulics",
  "question": "If a leak develops in Hydraulic System A electric motor-driven pump or its related lines, the hydraulic fluid quantity in the reservoir decreases to ____.",
  "answer": "0",
  "explanation": "Unlike the engine-driven pump circuit, the electric pump circuit and common components share plumbing that is not protected by the standpipe. A leak here drains the entire reservoir to zero, and you lose all System A pressure. This is a worse scenario than an engine pump leak because the standpipe cannot protect you."
 },
 {
  "section": "Hydraulics",
  "question": "The Power Transfer Unit (PTU) uses ____ pressure to power a hydraulic motor- driven pump which pressurizes ____ fluid for use in operating leading edge flaps and slats.",
  "answer": "System A, System B",
  "explanation": "The PTU takes System A pressure as its power source and uses it to drive a pump that pressurizes System B fluid. The key concept is power transfer without fluid transfer -- the two systems remain completely separate. System A provides the muscle, and System B provides the fluid that actually goes to the leading edge devices."
 },
 {
  "section": "Hydraulics",
  "question": "The minimum hydraulic System A and B pressure is ____ psi for preflight.",
  "answer": "2800",
  "explanation": "During preflight, you need to verify at least 2,800 psi on both Systems A and B. This is slightly below the normal 3,000 psi operating pressure but confirms the pumps are generating adequate pressure. If you see less than 2,800, something is not right and it needs to be addressed before departure."
 },
 {
  "section": "Hydraulics",
  "question": "With Hydraulic System B quantity near 0, what do these lights indicate?",
  "answer": "System B is lost with some fluid trapped in the reservoir.",
  "explanation": "When System B quantity drops near zero, it means the reservoir has drained through a leak. Unlike System A, System B has only one standpipe for both pumps, so any significant leak drains the system. However, the small amount of fluid remaining at the standpipe level is trapped and can still be used by the PTU to operate leading edge devices."
 },
 {
  "section": "Hydraulics",
  "question": "Which of the following statements is true if the LOW PRESSURE light (right) illuminates in flight?",
  "answer": "If the light is on steady, output pressure of System B engine driven pump is low.",
  "explanation": "The right LOW PRESSURE light on the hydraulic panel corresponds to the System B engine-driven pump (engine 2). A steady light means the pump output pressure has dropped below limits. This could be caused by an engine 2 failure, a pump failure, or a significant System B leak."
 },
 {
  "section": "Hydraulics",
  "question": "This light illuminates during takeoff, climbing through 1,000 feet AGL, and during flap retraction. Which statement below is most correct?",
  "answer": "The leading edge devices will retract at a normal rate through the PTU.",
  "explanation": "The scenario describes a System B engine-driven pump low pressure condition occurring during flap retraction after takeoff. Since the flaps are between up and 15 (being retracted) and you are airborne with low B engine pump pressure, the PTU activates automatically. It uses System A pressure to drive System B fluid, so the leading edge devices retract at a normal rate rather than a slow rate."
 },
 {
  "section": "Hydraulics",
  "question": "How would this condition effect the flap operation prior to landing?",
  "answer": "The PTU automatically aids in extending the leading edge devices with the trailing edge flaps less than 15 degrees, but not up.",
  "explanation": "On the NG, the PTU activates when flaps are between up and 15 degrees. During approach, as you extend flaps from up toward landing configuration, the leading edge devices start moving when flaps leave the up position. The PTU helps by providing normal-rate flow to the leading edge devices during this transition. Once flaps pass 15, the PTU is no longer needed because the LE devices are already extended."
 },
 {
  "section": "Hydraulics",
  "question": "These four lights are illuminated at the same lime. Choose the answer below that most accurately describes which hydraulic system(s) is/are lost?",
  "answer": "Both Hydraulic System A and Hydraulic System B",
  "explanation": "When all four hydraulic low pressure lights are on (both engine-driven and both electric pump lights), it means both Systems A and B have lost pressure. This is a dual hydraulic failure scenario. The Standby system would be your only remaining hydraulic source, providing rudder control, thrust reversers, and leading edge device extension."
 },
 {
  "section": "Hydraulics",
  "question": "Hydraulic Systems A and B are unavailable. How does this affect the Brake System?",
  "answer": "Braking is available via trapped hydraulic pressure in the brake accumulator.",
  "explanation": "Normal brakes need System B and alternate brakes need System A, so with both systems lost, neither brake source has active pressure. However, the brake accumulator stores pressurized hydraulic fluid specifically for this emergency. It provides limited braking -- enough for a few applications -- even with total hydraulic failure. This is your last line of defense for stopping the airplane."
 },
 {
  "section": "Hydraulics",
  "question": "With the same conditions, which primary flight control(s) will still be pressurized?",
  "answer": "The rudder using the Standby Hydraulic System.",
  "explanation": "With both A and B lost, the Standby system is your only hydraulic source. Standby powers the rudder through its own dedicated PCU, plus both thrust reversers and leading edge device extension. You lose ailerons and elevators entirely because those are only powered by A and B. The rudder becomes your sole hydraulically powered flight control surface."
 },
 {
  "section": "Hydraulics",
  "question": "With these lights illuminated and switches positioned as shown on the Hydraulic Panel, the pressure in Hydraulic System A should read __ psi.",
  "answer": "0",
  "explanation": "When the hydraulic panel shows all System A pumps with low pressure lights and the switches indicate both pumps are ineffective, System A pressure drops to zero. With both pumps unable to generate pressure (whether due to pump failures, fluid loss, or switches off), there is nothing to maintain the 3,000 psi operating pressure."
 },
 {
  "section": "Hydraulics",
  "question": "What is not available with no pressure in Hydraulic System A.",
  "answer": "Half of the flight spoilers and all of the ground spoilers",
  "explanation": "System A powers flight spoilers 2, 4, 9, and 11 (half of the eight flight spoilers), plus all four ground spoilers (1, 6, 7, 12). Ground spoilers are exclusively powered by System A with no backup. You also lose alternate brakes, normal nosewheel steering, the No. 1 thrust reverser, normal landing gear operation, and Autopilot A."
 },
 {
  "section": "Hydraulics",
  "question": "If on descent, how would the landing gear be lowered with this condition?",
  "answer": "The gear will have to be lowered manually.",
  "explanation": "Normal gear extension requires System A pressure, and alternate gear retraction uses System B via the transfer valve -- but there is no alternate extension through System B. With System A lost, the only way to get the gear down is manual extension: move the gear lever to OFF, open the access door on the center pedestal, and pull the manual extension handle. Gravity and air loads do the rest."
 },
 {
  "section": "Hydraulics",
  "question": "When lowering the flaps using the alternate flaps switch, _____",
  "answer": "the trailing edge flaps will be lowered electrically and the leading edge flaps and slats will be extended by standby hydraulics.",
  "explanation": "The alternate flaps system uses two different power paths. Trailing edge flaps are moved by an electric motor (not hydraulics at all), while the leading edge flaps and slats are extended using standby hydraulic pressure. This split design provides redundancy -- even if all main hydraulics are lost, you can still configure for landing using electrical power for TE flaps and the standby pump for LE devices."
 },
 {
  "section": "Hydraulics",
  "question": "In addition to both lights (above) being illuminated, the airplane is airborne, flaps are extended, and the FLT CONTROL B Hydraulic System Switch is in the normal position. Which of the following conditions is also true?",
  "answer": "Automatic operation of the Standby Hydraulic System will occur.",
  "explanation": "All four conditions for automatic standby activation are met: there is a loss of system pressure (both lights on), flaps are extended, the aircraft is airborne, and the FLT CONTROL switch is in the ON position. When all these conditions exist simultaneously, the standby pump starts automatically without any crew action needed."
 },
 {
  "section": "Hydraulics",
  "question": "If the standby hydraulic low quantity light is illuminated, ______.",
  "answer": "at least half of the standby fluid has been depleted",
  "explanation": "The standby LOW QUANTITY light triggers at approximately half empty. Since the standby reservoir is fed from System B's reservoir, a standby leak will drain fluid from standby but System B stabilizes at about 70% and keeps working normally. The light is an early warning that you are losing standby capability, though you still have some fluid remaining."
 },
 {
  "section": "Hydraulics",
  "question": "This light is armed ______.",
  "answer": "any time there is power on the aircraft",
  "explanation": "The standby hydraulic LOW QUANTITY light is always armed whenever the aircraft has electrical power. Unlike the standby LOW PRESSURE light, which is only armed when the standby system is actively running, the quantity light monitors the reservoir level continuously. This makes sense because you want to know about fluid loss regardless of whether the standby pump is currently operating."
 },
 {
  "section": "Hydraulics",
  "question": "With this light illuminated, Hydraulic System B quantity should read approximately __ %.",
  "answer": "70",
  "explanation": "When the standby LOW QUANTITY light comes on, it means the standby reservoir (which is connected to System B's reservoir) has a leak. Fluid flows from System B into the standby system and out through the leak until the reservoirs equalize, at which point System B stabilizes at about 70% full. System B continues to function normally at this level."
 },
 {
  "section": "Hydraulics",
  "question": "When the overheat was detected in Hydraulic System B, what happens to the corresponding electric motor driven pump?",
  "answer": "The pump shuts off automatically.",
  "explanation": "When a hydraulic electric pump overheats, the system automatically shuts off the pump to prevent damage. The OVERHEAT amber light illuminates on the hydraulic panel to alert the crew. The pump is protected because running it while overheated could cause seizure or fire. The heat exchanger in the fuel tank is supposed to prevent this, but if cooling is inadequate (such as low fuel), the overheat protection activates."
 },
 {
  "section": "Hydraulics",
  "question": "The QRH directs the crew to switch the Hydraulic System B electric motor driven pump OFF. How will this affect the operation of the Power Transfer Unit (PTU)?",
  "answer": "System B electric motor driven pump pressure does not determine operation of the PTU.",
  "explanation": "The PTU activation logic only monitors System B engine-driven pump pressure, not the electric pump. Turning off the System B electric pump has no effect on whether the PTU activates or operates. The PTU cares about engine-driven pump pressure specifically because a loss of that pump indicates the engine is not running, which is the scenario the PTU was designed to handle."
 },
 {
  "section": "Hydraulics",
  "question": "System A low pressure light is illuminated on the overhead panel. With this light on, how can the gear be extended?",
  "answer": "Normal gear extension",
  "explanation": "The System A low pressure light on the overhead panel indicates only that one of the System A pumps has low output -- it does not mean System A is completely lost. As long as System A still has some pressure (for example, from the remaining pump), normal gear extension is still possible. You would only need manual extension if System A had no pressure at all."
 },
 {
  "section": "Hydraulics",
  "question": "With the A hydraulic system engine driven pump low pressure light on and indicating volume in the A reservoir.",
  "answer": "gear will retract at a slower rate",
  "explanation": "With the System A engine-driven pump failed but fluid still in the reservoir, the electric pump takes over. Since the electric pump only provides about 1/6th the fluid volume of the engine-driven pump, high-demand operations like gear retraction happen much more slowly. The gear will still retract -- it just takes longer because the electric pump cannot move fluid as fast."
 },
 {
  "section": "Hydraulics",
  "question": "With this light on during gear retraction, the landing gear transfer unit will activate with ______.",
  "answer": "low RPM on the #1 Engine",
  "explanation": "The landing gear transfer valve activates when engine 1 RPM drops below a limit while airborne with the gear lever UP and a main gear not yet up and locked. If you already have the System A engine pump low pressure light on and then engine 1 RPM drops, the transfer valve opens to supply System B engine-driven pump pressure to help retract the gear at a normal rate."
 },
 {
  "section": "Hydraulics",
  "question": "The crew suspects a leak in Hydraulic Systems B as indicated. How would the trailing edge (TE) flaps be extended in flight under these conditions?",
  "answer": "The TE flaps can be extended electrically via the ALTERNATE FLAP Position Switch.",
  "explanation": "Trailing edge flaps are normally powered only by System B, so when System B leaks and loses pressure, you cannot extend TE flaps normally. The backup method is the alternate flaps system: arm the ALTERNATE FLAPS master switch and use the position switch. This powers the TE flaps electrically through a separate motor, completely bypassing the hydraulic system."
 },
 {
  "section": "Hydraulics",
  "question": "What happens if this light illuminates on takeoff, prior to gear retraction without engine failure?",
  "answer": "The landing gear should retract at a slower rate since the electric motor-driven pump's fluid volume is 1/6 of the engine-driven pump output.",
  "explanation": "If the System A engine-driven pump low pressure light comes on during takeoff with no engine failure, it means the pump itself has failed even though engine 1 is still running. The System A electric pump maintains pressure but at much lower flow. Gear retraction still works but takes longer because the electric pump delivers only about one-sixth the fluid volume of the engine-driven pump."
 },
 {
  "section": "Hydraulics",
  "question": "If the light is illuminated due to a leak in the #1 (System A) engine-driven pump, then System A quantity will ____",
  "answer": "Drop to approximately 20%.",
  "explanation": "When the engine-driven pump or its lines leak, fluid drains from the reservoir until it reaches the standpipe level, which is at approximately 20%. The standpipe physically prevents fluid from draining below this level through the engine pump circuit. The remaining 20% is reserved for the electric pump, which can then maintain System A pressure for the components it serves."
 },
 {
  "section": "Hydraulics",
  "question": "Both engines are still operating. Turning OFF the #1 Engine Hydraulic Pump Switch",
  "answer": "does not affect the rotation of the pump",
  "explanation": "The engine hydraulic pump is mechanically driven by the engine accessory gearbox. As long as the engine is turning, the pump spins. The pump switch only controls a blocking valve on the pressure output side. So turning the switch OFF stops pressurized fluid from reaching downstream components, but the pump itself keeps spinning with the engine. You would need to pull the fire handle to stop fluid flow to the pump entirely."
 },
 {
  "section": "Hydraulics",
  "question": "In flight, what conditions could cause these two lights to illuminate?",
  "answer": "The fluid used to cool and lubricate the Hydraulic System B electric- motor driven pump has overheated, or the pump itself has overheated.",
  "explanation": "The OVERHEAT and LOW PRESSURE lights for System B electric pump illuminate together because when an overheat is detected, the pump automatically shuts off for protection, which then causes the low pressure condition. The overheat could be caused by insufficient cooling (the heat exchanger needs adequate fuel in tank 2) or by the pump working excessively hard."
 },
 {
  "section": "Hydraulics",
  "question": "After a few minutes, the crew notices that both Hydraulic Systems A and B are now unavailable as shown. How can the landing gear be extended prior to landing?",
  "answer": "Only by using manual landing gear extension.",
  "explanation": "With both Systems A and B lost, there is no hydraulic power available to extend the gear. Normal extension needs System A, and there is no alternate hydraulic extension available. The only option is manual extension: gear lever to OFF, open the access door in the center pedestal, and pull the handle. Gravity and aerodynamic loads push the gear down and into the locked position."
 },
 {
  "section": "Hydraulics",
  "question": "Both Hydraulic Systems A and B are still unavailable after landing. Select the answer which best describes the operation of the nose wheel steering in this condition.",
  "answer": "It does not work without pressure from Hydraulic Systems A or B.",
  "explanation": "Normal nosewheel steering requires System A, and alternate nosewheel steering requires System B. With both systems lost, there is no hydraulic pressure available to power any steering. The standby system does not provide nosewheel steering capability. You would need to use differential braking (from the brake accumulator) or a tug to maneuver on the ground."
 },
 {
  "section": "Landing Gear",
  "question": "The landing gear is normally extended and retracted by which hydraulic system?",
  "answer": "A",
  "explanation": "System A is the normal hydraulic system for all landing gear operations -- both extension and retraction. This pairs with the fact that the engine-driven pump for System A is on engine 1, the captain's side. If System A is lost, you can retract via the transfer valve (System B), but extension without System A requires manual gear extension."
 },
 {
  "section": "Landing Gear",
  "question": "Parking brakes can utilize pressure from ____.",
  "answer": "System A or B",
  "explanation": "The parking brake system can draw pressure from either System A or System B, giving you flexibility. Normal brakes use System B and alternate brakes use System A, so the parking brake can tap into whichever system has pressure available. This ensures you can set parking brakes in most situations as long as at least one main hydraulic system is operational."
 },
 {
  "section": "Landing Gear",
  "question": "In the event the #1 engine fails, normal retraction of the landing gear is not available; however, the gear will be retracted by ____.",
  "answer": "the Landing Gear Transfer Unit",
  "explanation": "Normal gear retraction depends on the System A engine-driven pump, which is powered by engine 1. When engine 1 fails, that pump loses output. The landing gear transfer valve automatically senses this condition and routes System B engine-driven pump pressure to retract the gear. This ensures you can still clean up the airplane after an engine 1 failure on takeoff."
 },
 {
  "section": "Landing Gear",
  "question": "The Landing Gear Transfer Unit provides for gear retraction in the event of a failure of the ____.",
  "answer": "No. 1 engine",
  "explanation": "The transfer valve specifically monitors engine 1 RPM because engine 1 drives the System A engine-driven pump, which is the primary power source for gear retraction. When engine 1 RPM drops below a limit value, the transfer valve opens to supply System B pressure for retraction. It only helps with retraction, not extension."
 },
 {
  "section": "Landing Gear",
  "question": "In the event of system A loss and landing gear is up, the gear may be extended by ____.",
  "answer": "manual extension",
  "explanation": "There is no alternate hydraulic method to extend the gear -- the transfer valve only helps with retraction, not extension. So if System A is lost with the gear up, your only option is the manual extension system. You move the gear lever to OFF, access the manual release handle through the center pedestal door, and pull it. Gravity and air loads push the gear down and lock it."
 },
 {
  "section": "Landing Gear",
  "question": "The override trigger, located on the underside of the gear handle, can be used to override ____.",
  "answer": "the lever lock",
  "explanation": "On the NG, the gear lever has a lock that prevents inadvertent movement from the UP position. To move the lever from UP to OFF or DOWN, you squeeze the trigger on the underside of the handle to release this lock. On the MAX, a pushbutton serves the same function. This prevents accidentally dropping the gear in flight or raising it on the ground."
 },
 {
  "section": "Landing Gear",
  "question": "Under normal operations, gear green lights illuminated means the ____.",
  "answer": "related gear is down and locked",
  "explanation": "Three green lights (one for each gear) mean all three landing gear are fully down and mechanically locked. This is the safe-for-landing indication. A red light means the gear position disagrees with the lever position (gear in transit or not where it should be). All lights off means gear up and locked with the lever UP or OFF."
 },
 {
  "section": "Landing Gear",
  "question": "What stops wheel rotation when the gear is raised?",
  "answer": "A snubber on the nosewheel, and wheel brakes are applied to the main wheels.",
  "explanation": "After liftoff, the wheels are still spinning from the takeoff roll. When the gear retracts into the wheel wells, spinning wheels could cause damage. The nosewheel has a snubber (a friction device) that slows and stops it, while the main wheels use brake application to stop their rotation. This prevents the spinning tires from contacting and damaging the wheel well structure."
 },
 {
  "section": "Landing Gear",
  "question": "With RTO selected, if the takeoff is rejected and throttles reduced to idle ____, maximum braking is applied.",
  "answer": "at or above 90 knots",
  "explanation": "The RTO autobrake setting arms the system for rejected takeoff. It requires two conditions to activate: thrust levers at idle and wheel spinup (ground contact confirmation). The 90-knot threshold ensures that maximum braking only engages at speeds where it is truly needed. Below 90 knots, the airplane can typically stop with normal braking without the aggressive deceleration of RTO autobrakes."
 },
 {
  "section": "Landing Gear",
  "question": "The maximum speed allowed while the gear is extended is _____ KIAS.",
  "answer": "320",
  "explanation": "The landing gear extended speed limit of 320 KIAS protects the gear doors, struts, and structure from aerodynamic loads that exceed their design limits. Flying faster than this with gear down risks structural damage. This is a structural limitation, not a hydraulic one -- the gear components simply are not designed for the forces at higher speeds."
 },
 {
  "section": "Landing Gear",
  "question": "A fault in the Parking Brake System may cause the ____________________to illuminate.",
  "answer": "ANTISKID INOP Light",
  "explanation": "The parking brake and antiskid systems share some common components and valve pathways. A parking brake fault can interfere with normal antiskid operation, causing the ANTISKID INOP light to come on. This is a reminder that the systems are interconnected -- a problem in one braking subsystem can affect the status indications of another."
 },
 {
  "section": "Landing Gear",
  "question": "Operation with assumed temperature reduced takeoff thrust is not permitted with antiskid inoperative.",
  "answer": "True",
  "explanation": "Assumed temperature (flex) takeoff thrust reduces engine power to save engine life, which means longer takeoff rolls and reduced stopping margins. Without antiskid, braking effectiveness is significantly degraded because you could lock up wheels and blow tires. Combining reduced thrust (longer acceleration) with degraded braking (longer deceleration) creates an unacceptable safety margin, so this combination is prohibited."
 },
 {
  "section": "Landing Gear",
  "question": "(MAX) The \u201cOFF\u201d position on the Landing Gear Lever is no longer required since:",
  "answer": "There are no mechanical connections with the valve system. OR ALSO: Pressure automatically removed 10 seconds after all gear up and locked.",
  "explanation": "On the NG, the OFF position was needed to manually remove hydraulic pressure from the gear system after retraction, preventing unnecessary pressure on uplocks. On the MAX, the Proximity Switch Electronics Unit (PSEU) automatically removes pressure 10 seconds after sensing all gear up and locked. Since there are no mechanical linkages requiring a manual OFF position, Boeing eliminated it to simplify the lever."
 },
 {
  "section": "Landing Gear",
  "question": "With the Gear Handle up after takeoff, these lights are illuminated. What is the most likely problem?",
  "answer": "Tread separation, on a right tire, impacted a fitting on the wheel well ring.",
  "explanation": "When you see gear disagree lights after selecting gear up, one common real-world cause is tire tread separation. If a tire sheds tread during the takeoff roll, the loose rubber can strike the wheel well ring fitting as the gear retracts, physically jamming the gear and preventing it from completing retraction. The right main gear is flagged because the specific light pattern indicates that side is stuck."
 },
 {
  "section": "Landing Gear",
  "question": "When a spinning tire with loose tread impacts a fitting in the wheel well ring opening, the right main gear _____.",
  "answer": "will not retract",
  "explanation": "The loose tread physically jams the gear mechanism or blocks the gear from folding into the wheel well. The gear cannot complete its retraction cycle, so it stays down (or partially retracted). The red gear light stays on because the gear position disagrees with the lever-up command. This is a mechanical obstruction problem, not a hydraulic one."
 },
 {
  "section": "Landing Gear",
  "question": "If the crew decides to return to the departure field, ________",
  "answer": "landing is made with a normal gear configuration",
  "explanation": "If the right main gear will not retract due to a tread strike, it is still down. The other two gear are either still down or can be extended normally. Since the stuck gear never left the down-and-locked position (or is hanging down), you simply lower the other gear and land normally. The gear that would not retract is already in the right position for landing."
 },
 {
  "section": "Landing Gear",
  "question": "If anti-skid system still functions normally with the loss of hydraulic systems A and B, the auto-brake system ______.",
  "answer": "will not work",
  "explanation": "Autobrakes only work with the normal braking system, which requires System B hydraulic pressure. Even if the antiskid sensors and electronics are working perfectly, autobrakes cannot function without active hydraulic pressure from System B to modulate brake application. With both A and B lost, you only have accumulator pressure for manual braking."
 },
 {
  "section": "Landing Gear",
  "question": "On gear extension, the left red gear light remains on with no green light. What action will you take?",
  "answer": "Check the overhead panel for gear indication prior to other procedures.",
  "explanation": "Before assuming the worst, check the backup gear position indications on the overhead panel. The red light with no green could mean the gear is truly not down and locked, or it could be a bulb failure in the green light. The overhead panel has independent gear position indicators that can confirm whether the gear is actually down and locked, which changes your next steps significantly."
 },
 {
  "section": "Landing Gear",
  "question": "The overhead panel shows all the gear lights green. This indicates the left main is ____.",
  "answer": "down and locked",
  "explanation": "The overhead panel gear indicators are independent from the main gear panel lights near the gear lever. If the overhead shows green for all three gear, the left main is confirmed down and locked. This means the earlier red light on the main panel was likely a bulb failure in the green position light, not an actual gear problem. Always cross-check with the overhead panel."
 },
 {
  "section": "Landing Gear",
  "question": "The overhead panel does not show a green light for the left main. What statement is true?",
  "answer": "The left main is not down and locked.",
  "explanation": "If both the main gear panel and the overhead panel agree that the left main gear does not show green, the gear is genuinely not down and locked. Two independent indication systems confirming the same thing gives you high confidence in the diagnosis. At this point, you would follow the appropriate QRH procedure, which may include manual gear extension."
 },
 {
  "section": "Landing Gear",
  "question": "With a loss of hydraulic system A and B (all pump low-pressure lights illuminated), _____.",
  "answer": "brakes will still use the normal anti-skid system",
  "explanation": "Even though both hydraulic systems are lost, the antiskid system is electrically powered, not hydraulically powered. The brake accumulator provides stored hydraulic pressure for actual braking force, and the antiskid system electronically monitors wheel speeds and modulates that accumulator pressure to prevent skids. So you get antiskid-protected braking from the accumulator, just with limited total brake applications."
 },
 {
  "section": "Landing Gear",
  "question": "The brake pressure indicator reads as shown (3000 psi) after the loss of Hydraulic Systems A and B. What type of problem does this indicate?",
  "answer": "This indication is normal.",
  "explanation": "The brake accumulator is pre-charged to system pressure (3,000 psi) and holds that pressure even after the hydraulic systems lose power. Seeing 3,000 psi on the brake pressure indicator with both systems lost simply means the accumulator is fully charged and ready to provide emergency braking. The pressure will decrease with each brake application since there are no active pumps to replenish it."
 },
 {
  "section": "Air Conditioning",
  "question": "The ram air doors normally modulate to full OPEN when the aircraft is ____.",
  "answer": "in flight with flaps not fully retracted or on the ground",
  "explanation": "The pack heat exchangers need maximum outside air cooling when the airplane is slow (on the ground or in the pattern with flaps out) because there isn't enough natural ram airflow at low speeds. At cruise, higher airspeed provides plenty of cooling so the doors can modulate partially closed."
 },
 {
  "section": "Air Conditioning",
  "question": "The APU can supply bleed air for the pack up to ____.",
  "answer": "17,000 feet or 10,000 feet if the APU is also providing electricity",
  "explanation": "The APU has altitude limits because it produces less power in thinner air. When it only needs to supply bleed air, it can handle up to 17,000 ft, but when it is also driving a generator for electrical power, the additional load drops that ceiling to 10,000 ft."
 },
 {
  "section": "Air Conditioning",
  "question": "The mix manifold receives air from the ____.",
  "answer": "left pack, right pack, recirculation fan, and pre-conditioned air",
  "explanation": "The mix manifold is the central collection point where all conditioned air sources come together before being distributed to the cabin. Both packs supply freshly cooled bleed air, the recirc fans return filtered cabin air to reduce pack workload, and on the ground a preconditioned ground air cart can feed in as well."
 },
 {
  "section": "Air Conditioning",
  "question": "What is the primary source of conditioned air for the cockpit?",
  "answer": "Left pack",
  "explanation": "The 737's air distribution is split so the left pack primarily serves the flight deck while the right pack primarily serves the passenger cabin. This way each pack has a dedicated zone to keep temperatures well controlled."
 },
 {
  "section": "Air Conditioning",
  "question": "The primary purpose of the recirculation fans is to ____.",
  "answer": "reduce air conditioning pack load",
  "explanation": "Recirc fans take already-conditioned cabin air, filter it, and send it back into the mix manifold. This reduces how much new bleed air the packs need to process, which lowers the bleed demand on the engines and improves fuel efficiency."
 },
 {
  "section": "Air Conditioning",
  "question": "Equipment cooling is provided for electronic equipment in the ____.",
  "answer": "E & E bay and flight deck area",
  "explanation": "The avionics and electronic equipment in the E/E (electronics and equipment) bay below the flight deck and on the flight deck itself generate significant heat. A dedicated cooling system with supply and exhaust fans keeps that equipment within operating temperature limits."
 },
 {
  "section": "Air Conditioning",
  "question": "The equipment cooling system has ___________ fan(s).",
  "answer": "2 supply and 2 exhaust",
  "explanation": "There are two supply fans (one NORM, one ALTN) pushing cool air to the equipment, and two exhaust fans (one NORM, one ALTN) pulling hot air away. This redundancy means if a primary fan fails, the alternate can take over within about 5 seconds."
 },
 {
  "section": "Air Conditioning",
  "question": "Air from the preconditioned ground source enters the air conditioning system through the ____.",
  "answer": "mix manifold",
  "explanation": "A ground air conditioning cart connects directly into the mix manifold, bypassing the packs entirely. This makes sense because the cart is already providing conditioned air, so there is no need to run it through the aircraft's own packs."
 },
 {
  "section": "Air Conditioning",
  "question": "Engine low-pressure bleed air is provided by the ____ stage, and engine high- pressure bleed air is provided by the ____ stage air.",
  "answer": "5th/9th",
  "explanation": "On the NG fleet, the 5th compressor stage provides low-pressure bleed and the 9th stage provides high-pressure bleed. At high power settings the 5th stage has enough pressure, but at low power or high altitude the system automatically opens the 9th stage valve to supplement. The MAX uses 4th and 10th stages instead."
 },
 {
  "section": "Air Conditioning",
  "question": "Each A/C pack has ____ controllers for pack temperature control.",
  "answer": "2",
  "explanation": "Each pack has a primary and a standby temperature controller for redundancy. If the primary fails, the standby takes over so you don't lose temperature regulation for that pack."
 },
 {
  "section": "Air Conditioning",
  "question": "If the primary equipment cooling fan fails, what indications would be displayed?",
  "answer": "Master Caution light, the related equipment cooling OFF light, and the OVERHEAD annunciator light on the System Annunciator Panel",
  "explanation": "When a primary equipment cooling fan fails, the system alerts you through the standard caution annunciation path: Master Caution to get your attention, the specific equipment cooling OFF light on the overhead panel to identify the problem, and the OVERHEAD annunciator on the system annunciator panel to direct you to look at the overhead."
 },
 {
  "section": "Air Conditioning",
  "question": "In the event of a single pack failure at altitude, the remaining pack is capable of maintaining cabin pressure and comfort at an airplane altitude of _____.",
  "answer": "41,000 feet",
  "explanation": "A single pack in HIGH flow mode is designed to maintain both pressurization and acceptable temperatures all the way up to the airplane's maximum certified ceiling of 41,000 ft. This is an important design feature since it means a pack failure doesn't require an immediate descent."
 },
 {
  "section": "Air Conditioning",
  "question": "The APU will supply bleed air for ____ pack(s) ____.",
  "answer": "one, only in flight OR ALSO: both, on the ground",
  "explanation": "The APU has less capacity at altitude due to thinner air, so in flight it can only supply enough bleed for one pack. On the ground, where the APU operates at full capacity with dense sea-level air, it can supply both packs."
 },
 {
  "section": "Air Conditioning",
  "question": "Inflight, normal air conditioning system operation would be ____.",
  "answer": "each pack from its associated engine bleed source",
  "explanation": "During normal flight, the left pack gets its bleed air from the No. 1 engine and the right pack from the No. 2 engine. This is the standard configuration because each engine independently supplies its own side, so a failure on one side doesn't directly affect the other."
 },
 {
  "section": "Air Conditioning",
  "question": "Which single bleed source is permitted to supply air to both packs on the ground?",
  "answer": "The APU only",
  "explanation": "On the NG, a single engine is not permitted to supply both packs on the ground because the engine would have to work harder to provide that much bleed air. The APU, however, is specifically designed for ground operations and can handle the demand for both packs without issue."
 },
 {
  "section": "Air Conditioning",
  "question": "The ram air system operates automatically to provide cooling for ____.",
  "answer": "the PACK heat exchangers",
  "explanation": "Outside air flowing through the ram air inlets passes over the pack heat exchangers, which is how the packs dump heat from the compressed bleed air. This is the first stage of the cooling cycle before the air cycle machine further refrigerates the air."
 },
 {
  "section": "Air Conditioning",
  "question": "For maximum cooling (of the pack) the ram air inlet doors modulate toward the _________.",
  "answer": "full open position",
  "explanation": "Opening the ram air doors fully allows the maximum amount of outside air to flow over the heat exchangers, which provides the greatest cooling effect. The system does this automatically when on the ground or at slow speeds where natural airflow is limited."
 },
 {
  "section": "Air Conditioning",
  "question": "Deflector doors on the ram air system are used on the ground to __________.",
  "answer": "prevent slush ingestion on takeoff or landing",
  "explanation": "When on the ground, slush, water, or debris kicked up from the runway could be sucked into the ram air inlets and damage the heat exchangers. The deflector doors, activated by the air-ground sensor, block this debris while still allowing some airflow."
 },
 {
  "section": "Air Conditioning",
  "question": "The deflector doors on the ram air system are fully extended ____.",
  "answer": "on the ground only",
  "explanation": "The deflector doors are activated by the air-ground sensor, so they fully extend on the ground where slush and debris are a concern. Once airborne, the risk of ingesting runway debris disappears, so the deflector doors retract."
 },
 {
  "section": "Air Conditioning",
  "question": "Zone temperature is controlled by introducing the proper amount of trim air into the__________.",
  "answer": "individual zone supply duct",
  "explanation": "The packs produce air cold enough to satisfy the zone needing the most cooling. Then each zone gets individually warmed by adding hot bleed air (trim air) into its own supply duct. Think of it as the packs making the coldest temperature needed, then warming up the other zones to their desired setpoints."
 },
 {
  "section": "Air Conditioning",
  "question": "Failure of the primary and standby flight deck zone temperature controls will cause the ____ to illuminate.",
  "answer": "ZONE TEMP, MASTER CAUTION, and AIR COND annunciator lights",
  "explanation": "A dual temperature controller failure for the flight deck is a bigger deal than a single failure, so it illuminates the ZONE TEMP light directly rather than only showing on recall. The CONT CAB zone is the only zone where a dual controller failure triggers these lights, because the flight deck only has two controllers (primary and standby) with no further backup."
 },
 {
  "section": "Air Conditioning",
  "question": "Inflight, the forward cargo compartment is heated by air drawn around it by the ____.",
  "answer": "recirculation fan system OR ALSO: equipment cooling system",
  "explanation": "Cabin air flowing downward through foot-level grills passes along the lining of the forward cargo compartment before being recirculated. This warm cabin air acts as a passive heat source for the cargo area, so no dedicated cargo heating system is needed."
 },
 {
  "section": "Air Conditioning",
  "question": "The temperature selector adjusts the desired zone temperature between a range of approximately ____ degrees.",
  "answer": "65-85",
  "explanation": "The temperature selectors for all three zones (flight deck, forward cabin, aft cabin) can be set between 65 degrees F and 85 degrees F. This range covers comfortable cabin temperatures from relatively cool to warm."
 },
 {
  "section": "Air Conditioning",
  "question": "When either the primary or standby pack temperature controller fails, what indications will be displayed?",
  "answer": "PACK, MASTER CAUTION, and AIR COND SYSTEM ANNUNCIATOR lights on recall",
  "explanation": "A single pack controller failure is not urgent because the other controller still works, so the indications only show up on recall (when you press the recall button) rather than illuminating constantly. The system continues operating normally on the remaining controller."
 },
 {
  "section": "Air Conditioning",
  "question": "If the FWD or AFT cabin ZONE TEMP lights illuminate indicating an overheat this will cause the associated ____ valve to close.",
  "answer": "trim air modulating",
  "explanation": "When a duct overheat is detected in a cabin zone, the system closes that zone's trim air modulating valve as a protective measure. Since trim air is hot bleed air being added to raise zone temperature, shutting it off removes the heat source that could be causing or worsening the overheat."
 },
 {
  "section": "Air Conditioning",
  "question": "The associated PACK light, Master Caution, and AIR COND annunciator will illuminate when ______.",
  "answer": "pack overheats or dual pack controller failure",
  "explanation": "These lights come on for the most serious pack-level faults. A pack overheat causes the pack valve to close (shutting down that pack), and a dual controller failure means neither the primary nor standby can regulate pack temperature. Both conditions require crew awareness because you may be down to single-pack operation."
 },
 {
  "section": "Air Conditioning",
  "question": "What fault indications cannot be reset with the trip reset button?",
  "answer": "Wing body overheat",
  "explanation": "A wing-body overheat indicates a bleed air duct leak, which is a serious structural and safety concern. The system intentionally prevents you from resetting it because the leak needs to be resolved before pressurized bleed air flows through that area again."
 },
 {
  "section": "Air Conditioning",
  "question": "The ZONE TEMP light, Master Caution, and AIR COND annunciator lights will illuminate for ____",
  "answer": "any of the above an overheat in the duct leading to any of the three zones a dual temperature controller failure in the CONTROL CAB zone any single temperature controller failure in any zone during a RECALL test any of the above",
  "explanation": "The ZONE TEMP light covers multiple scenarios: duct overheats in any zone (a safety concern), a dual controller failure in the CONT CAB zone (which has no further backup), and single controller failures that appear only during recall testing. This makes the ZONE TEMP light a catch-all for zone-level temperature control problems."
 },
 {
  "section": "Air Conditioning",
  "question": "Taking off with one or both PACK switches in HIGH is allowed with the engine bleed air switches on.",
  "answer": "False",
  "explanation": "Running packs in HIGH during takeoff with engine bleeds on draws excessive bleed air from the engines, which reduces available takeoff thrust. This is not permitted because you need maximum engine performance during the takeoff roll and initial climb."
 },
 {
  "section": "Air Conditioning",
  "question": "Placing the TRIM AIR switch OFF will:",
  "answer": "Cause the trim pressure regulating and shutoff valve to close. OR ALSO: Cause the left pack temperature to be controlled by the CONT CAB temp selector and the right PACK by the FWD and AFT temp selectors, resulting in averaging.",
  "explanation": "With trim air OFF, individual zone temperature fine-tuning is lost because no hot bleed air can be added to individual ducts. Instead, the left pack output temperature is governed by the CONT CAB selector and the right pack by an average of the FWD and AFT cabin selectors. You lose precise zone-by-zone control but the packs still provide conditioned air."
 },
 {
  "section": "Air Conditioning",
  "question": "At the same time this light illuminates, what other indications do you get?",
  "answer": "The Master Caution light illuminates and the right System Annunciator Panel shows AIR COND.",
  "explanation": "This is the standard caution annunciation cascade for air conditioning faults: the specific light (like PACK or ZONE TEMP) comes on, accompanied by the Master Caution light to get your attention, and the AIR COND annunciator on the right system annunciator panel to tell you the problem is in the air conditioning system."
 },
 {
  "section": "Air Conditioning",
  "question": "On the NG, both this light and the Master Caution lights are illuminated. What happens to the Left pack?",
  "answer": "The left pack valve will close if sensors detected excessive temperature in that pack.",
  "explanation": "When a pack overheat is detected, the system automatically closes the pack valve to shut off the hot bleed air supply and protect downstream components. This is a safety feature that prevents damage from overheated air reaching the cabin distribution system."
 },
 {
  "section": "Air Conditioning",
  "question": "Inflight, with the left pack valve closed due to excessive temperature, what other actions automatically occur in the Air Conditioning System?",
  "answer": "The right pack switches to high air flow if flaps are up.",
  "explanation": "When one pack fails in flight with flaps up, the remaining pack automatically switches to HIGH flow to maintain both pressurization and comfortable temperatures for the whole airplane. The flaps-up condition is important because on the ground or with flaps down, the system does not auto-switch to high in order to preserve engine power when you might need it most."
 },
 {
  "section": "Air Conditioning",
  "question": "If this light illuminated only on Recall, ____.",
  "answer": "only one of the CONT CAB Zone Temperature Controllers have failed",
  "explanation": "A single CONT CAB zone controller failure is not urgent because the standby controller takes over and maintains temperature control. That's why it only shows on recall rather than illuminating as a persistent warning. If both controllers failed, it would illuminate directly without needing recall."
 },
 {
  "section": "Air Conditioning",
  "question": "If this light extinguishes when the master caution light is pressed",
  "answer": "The system will operate normally",
  "explanation": "If the caution light goes out when you press the Master Caution reset, it means the fault was momentary or transient and has already cleared. The system is operating normally and no further action is needed."
 },
 {
  "section": "Air Conditioning",
  "question": "If this light illuminated due to an overheat condition in the applicable zone supply duct, the Master Caution Lights will also illuminate; and ____.",
  "answer": "the CONT CAB trim air modulating valve closes",
  "explanation": "When a duct overheat is detected in the flight deck zone, the trim air modulating valve for that zone automatically closes. Since trim air is hot bleed air being added to warm the zone, closing the valve removes the heat source and helps protect against further overheating."
 },
 {
  "section": "Air Conditioning",
  "question": "With all the temperature selectors positioned to OFF, the packs will adjust for cabin demand. In this case, which statement is most correct?",
  "answer": "The left pack outputs will adjust for a demand of 75 degrees, and the right pack output will adjust for a demand of 65 degrees.",
  "explanation": "When all temperature selectors are turned OFF, the packs default to fixed output temperatures: the left pack produces 75 degrees F and the right pack produces 65 degrees F. These are built-in default values that provide a reasonable cabin temperature without any active zone control."
 },
 {
  "section": "Pneumatics",
  "question": "The Boeing 737-800 uses pneumatic air from which of the following sources?",
  "answer": "Engine bleed air, external air, APU bleed air",
  "explanation": "The 737 has three sources of pneumatic air. Engines are the primary source in flight, the APU is the primary source on the ground before engine start, and an external air cart can be connected during ground operations. This gives flexibility for every phase of operation."
 },
 {
  "section": "Pneumatics",
  "question": "Bleed air from the engines comes from what compressor stages?",
  "answer": "5th and 9th",
  "explanation": "On the NG, the 5th stage (low pressure) is normally sufficient during takeoff, climb, and most cruise. When the 5th stage pressure drops too low (like at high altitude or low power), the 9th stage (high pressure) valve automatically opens to provide adequate bleed pressure."
 },
 {
  "section": "Pneumatics",
  "question": "The ____ systems rely on pneumatic pressure for operation.",
  "answer": "Engine starting, air conditioning/pressurization, wing and engine anti-ice, hydraulic, water tank pressurization, and TAT probe",
  "explanation": "Bleed air is a versatile power source on the 737. It spins the engine during start, feeds the air conditioning packs and pressurization, heats wing and cowl surfaces for anti-ice, pressurizes the hydraulic reservoirs and water tank, and aspirates the TAT probe. Losing bleed air affects many systems at once."
 },
 {
  "section": "Pneumatics",
  "question": "____ cause(s) the engine bleed valve to automatically close.",
  "answer": "Either over pressure or over temperature",
  "explanation": "The engine bleed valve has built-in protection that automatically closes the valve if bleed air pressure or temperature exceeds safe limits. This protects the downstream ducting and components from damage. On the NG, this is indicated by the BLEED TRIP OFF light."
 },
 {
  "section": "Pneumatics",
  "question": "Illumination of the amber BLEED TRIP OFF light indicates what valve has automatically closed?",
  "answer": "Engine bleed air valve",
  "explanation": "The BLEED TRIP OFF light specifically tells you the engine bleed air valve has tripped closed due to an overpressure or overtemperature condition. This is an automatic protection feature. On the NG, you can attempt to reset it with the TRIP RESET button, but on the MAX the equivalent BLEED light may not be resettable."
 },
 {
  "section": "Pneumatics",
  "question": "When the APU is shut down, the APU bleed valve ___________.",
  "answer": "Closes automatically regardless of APU bleed air switch position",
  "explanation": "The APU bleed valve is designed to automatically close whenever the APU shuts down, no matter where the bleed air switch is positioned. This prevents any backflow of air into the APU and ensures clean isolation of that bleed source when the APU is not running."
 },
 {
  "section": "Pneumatics",
  "question": "The APU bleed air valve will close if ____.",
  "answer": "The APU Bleed Air Switch is placed OFF or if the APU is shutdown",
  "explanation": "The APU bleed valve closes in two situations: when you command it closed with the switch, or when the APU itself shuts down (since there would be no bleed air to supply). This automatic closure on shutdown is a safety feature that prevents backflow."
 },
 {
  "section": "Pneumatics",
  "question": "When starting engines with a ground air source, external air pressure should be ____ psi.",
  "answer": "Minimum of 30",
  "explanation": "Engine starting requires sufficient pneumatic pressure to spin the engine up to a speed where it can sustain combustion on its own. A minimum of 30 psi from the ground air cart ensures there is enough force to reliably turn the engine through the start sequence."
 },
 {
  "section": "Pneumatics",
  "question": "During normal operations, if the Isolation Valve switch is in AUTO, then the valve ____.",
  "answer": "Is closed",
  "explanation": "In AUTO with both bleeds ON and both packs in AUTO or HIGH, the isolation valve stays closed. This keeps the left and right pneumatic systems separate so each engine supplies its own pack independently. The valve only opens automatically when it detects one side needs help, like when a bleed or pack switch is placed OFF."
 },
 {
  "section": "Pneumatics",
  "question": "When the Isolation Valve Switch is in AUTO, the valve will open automatically if ____.",
  "answer": "a pack switch is placed OFF an engine bleed switch is placed OFF Either occur",
  "explanation": "The isolation valve in AUTO is smart enough to open when one side of the pneumatic system loses its source (bleed OFF) or its load (pack OFF). Opening the valve connects both sides so the remaining bleed source can supply the remaining pack, maintaining pressurization and air conditioning."
 },
 {
  "section": "Pneumatics",
  "question": "A DUAL BLEED light will illuminate when ____.",
  "answer": "the APU bleed air valve is open and Engine 1 Bleed Switch is ON the APU bleed air valve is open, Engine 2 Bleed Switch is ON, and the isolation valve is open Either occurs",
  "explanation": "The DUAL BLEED light warns that the APU bleed and an engine bleed are both feeding into the same manifold. This is dangerous because at engine idle, the APU can backpressure the engine's high stage valve. When this light is on, throttles must remain at idle to prevent damage."
 },
 {
  "section": "Pneumatics",
  "question": "BLEED TRIP OFF light would illuminate for ____.",
  "answer": "Excessive temperature or overpressure",
  "explanation": "The BLEED TRIP OFF light means the engine bleed valve has automatically tripped closed to protect the pneumatic system. The two conditions that trigger this are excessive bleed air temperature (which could damage ducting) and overpressure (which could cause a duct rupture)."
 },
 {
  "section": "Pneumatics",
  "question": "The right WING BODY OVERHEAT light indicates a duct leak in the ____.",
  "answer": "Right engine strut, right wing inboard leading edge, or right air conditioning bay",
  "explanation": "The right WING BODY OVERHEAT light monitors the right side bleed air ducting path from the engine strut through the wing leading edge to the air conditioning bay. A leak anywhere in that path means hot bleed air is escaping into the airframe structure, which is a serious safety concern."
 },
 {
  "section": "Pneumatics",
  "question": "The left WING BODY OVERHEAT light indicates a duct leak in the left engine strut, left wing leading edge, left air conditioning bay, and ____.",
  "answer": "APU duct and keel beam ducting",
  "explanation": "The left side monitors all the same areas as the right, plus the APU duct and keel beam ducting. The APU bleed duct runs along the left side of the aircraft, and the keel beam is the central structure where the APU duct connects to the pneumatic manifold. That is why the left light covers more territory than the right."
 },
 {
  "section": "Pneumatics",
  "question": "A bleed air duct leak is indicated by a ____ light.",
  "answer": "WING-BODY OVERHEAT",
  "explanation": "The WING-BODY OVERHEAT light is specifically designed to detect bleed air duct leaks. Temperature sensors along the bleed ducting detect the hot air escaping from a leak and trigger this warning. It cannot be reset with the TRIP RESET button because a duct leak is too serious to simply reset and continue."
 },
 {
  "section": "Pneumatics",
  "question": "The APU bleed valve must be closed if ____.",
  "answer": "Engine 1 is running above idle and its bleed air valve is open Engine 2 is running above idle, its bleed air valve is open, and the isolation valve is open external air is connected with the isolation valve open all of the above",
  "explanation": "Whenever another pneumatic source (engine above idle, or external air) is feeding into the same manifold as the APU, the APU bleed must be closed to prevent backpressure. Engine 1 directly connects to the left side where the APU feeds, while Engine 2 or external air need the isolation valve open to reach the APU side."
 },
 {
  "section": "Pneumatics",
  "question": "(MAX) How is the operation of the bleed air system managed?",
  "answer": "Electronically controlled",
  "explanation": "The MAX upgraded to digital bleed air management using the ACAU and IASC controllers. These electronic controllers can automatically detect and isolate faults, manage reverse flow protection, and allow both packs to run from a single engine bleed in flight, which the NG cannot do."
 },
 {
  "section": "Pneumatics",
  "question": "(MAX) BLEED Light illuminates for:",
  "answer": "above Over-temperature or overpressure. OR ALSO: System fault or failure.",
  "explanation": "On the MAX, the BLEED light replaces the NG's BLEED TRIP OFF light and covers more conditions. In addition to the traditional overpressure and overtemperature triggers, it also illuminates for system faults or failures detected by the digital controllers. Unlike the NG version, it may not be resettable."
 },
 {
  "section": "Pneumatics",
  "question": "(MAX) PACK Light Illuminates for:",
  "answer": "Over-temperature. OR ALSO: Both pack switches are in the OFF position 45 seconds after flap retraction on takeoff.",
  "explanation": "The MAX PACK light has an additional trigger beyond the NG: if both packs are still OFF 45 seconds after flap retraction on takeoff, it alerts the crew to a configuration issue. This catches the case where packs were turned off for takeoff performance but the crew forgot to turn them back on after cleanup."
 },
 {
  "section": "Pneumatics",
  "question": "(MAX) Features of MAX Bleed Air System:",
  "answer": "System allows operation of both packs from a single bleed air source. OR ALSO: System has been upgraded to a Digital Bleed Air Supply which automatically detects and isolates faults.",
  "explanation": "The MAX's digital bleed system (ACAU + IASC) is a significant upgrade. It allows both packs to operate from one engine in flight (the NG cannot do this), and it can automatically detect faults and isolate them without crew intervention. The ACAU also provides reverse flow protection by auto-closing the engine bleed valve to prevent backflow."
 },
 {
  "section": "Pneumatics",
  "question": "(MAX) If smoke is detected within the equipment cooling system, what amber caution light(s) will illuminate?",
  "answer": "Equip Smoke and Master Caution",
  "explanation": "The MAX added the EQUIP SMOKE light (which the NG does not have) with two smoke detectors in the supply and exhaust ducts of the equipment cooling system. When smoke is detected, the EQUIP SMOKE light and Master Caution illuminate. The light extinguishes 30 seconds after the smoke clears."
 },
 {
  "section": "Pneumatics",
  "question": "A bleed air duct leak in the __ will cause this light to illuminate.",
  "answer": "Left engine strut, left inboard wing leading edge, left air conditioning bay, keel beam, or the APU bleed air duct",
  "explanation": "This describes the left WING-BODY OVERHEAT light's coverage area. It monitors the entire left-side bleed duct path plus the shared APU duct and keel beam area. Temperature sensors along these ducts detect escaping hot bleed air from any leak."
 },
 {
  "section": "Pneumatics",
  "question": "Pushing the TRIP RESET switch will reset the WING-BODY OVERHEAT light _____.",
  "answer": "Never. This light cannot be reset with the TRIP RESET Switch",
  "explanation": "A bleed air duct leak is too serious to be casually reset. Hot bleed air escaping into the airframe could cause structural damage or fire, so the system intentionally prevents the crew from resetting this indication and restoring bleed airflow to the affected side."
 },
 {
  "section": "Pneumatics",
  "question": "The QRH directs the crew to close the Isolation valve, turn off the pack, close the engine bleed on the affected side, and turn off the wing anti-ice. Accomplishing these procedures will ____.",
  "answer": "Prevent air from the #1 engine entering the left bleed air duct and to shutoff all bleed air to the left side",
  "explanation": "These QRH steps systematically isolate the leaking left side. Closing the isolation valve prevents right-side air from crossing over, turning off the pack removes the demand pulling air through the leak, closing the engine bleed cuts off the source, and turning off wing anti-ice stops any remaining bleed flow. The goal is to completely depressurize the damaged ducting."
 },
 {
  "section": "Pneumatics",
  "question": "What will cause this light to illuminate?",
  "answer": "Air leak in the left engine strut Air leak in the APU bleed duct Either could be the cause",
  "explanation": "The left WING-BODY OVERHEAT light covers both the left engine strut area and the APU bleed duct because the APU feeds into the left pneumatic manifold. A leak in either location would cause the same overheat detection along the left-side ducting."
 },
 {
  "section": "Pneumatics",
  "question": "What will make the light extinguish?",
  "answer": "Remove air source from APU by either turning off APU bleed or shutting APU down",
  "explanation": "If the duct leak is in the APU bleed duct, removing the APU as an air source stops hot bleed air from flowing through the damaged duct. Once the airflow stops, the temperature drops and the overheat sensors cool down, causing the light to extinguish."
 },
 {
  "section": "Pneumatics",
  "question": "The QRH Non-Normal checklist directs you to close the ISOLATION VALVE as a first step. This is done to ____.",
  "answer": "Prevent air from the opposite side to enter the side with a bleed air leak",
  "explanation": "Closing the isolation valve is always the first step in a bleed air leak procedure because it immediately prevents the good side's bleed air from flowing through the crossbleed manifold into the leaking side. This limits the leak to only one source rather than allowing both sides to feed the damaged duct."
 },
 {
  "section": "Pneumatics",
  "question": "The aircraft is climbing through 5,000 ft when this light illuminated. What caused this light to illuminate?",
  "answer": "An overheat or an overpressure condition has occurred in the #2 engine bleed air duct",
  "explanation": "The BLEED TRIP OFF light for the right side means the #2 engine bleed valve has automatically closed due to an overtemperature or overpressure event in that engine's bleed duct. The automatic closure is a protective feature to prevent duct damage."
 },
 {
  "section": "Pneumatics",
  "question": "What happened when this light illuminated in flight?",
  "answer": "The #2 engine bleed air valve closes automatically",
  "explanation": "When the BLEED TRIP OFF light comes on, it means the protection system has already acted by closing the engine bleed valve. This is an automatic response, not something the crew needs to do. The valve closes to stop the overheated or overpressured bleed air from reaching downstream components."
 },
 {
  "section": "Pneumatics",
  "question": "The flaps were retracted in flight when this light illuminated. The QRH directs the crew to RESET the tripped bleed. The BLEED TRIP OFF Light remains illuminated. The QRH then directs the crew to turn OFF the Right A/C Pack Switch. Therefore, the _____.",
  "answer": "Right pack remains shut down and the left pack switches to \"high air flow\" mode",
  "explanation": "Since the bleed trip could not be reset, the right side has no bleed air source, so the right pack must be shut down. With flaps up in flight, the left pack automatically switches to HIGH flow to compensate and maintain pressurization and cabin comfort for the whole airplane."
 },
 {
  "section": "Pneumatics",
  "question": "What would cause this light to illuminate?",
  "answer": "#1 and #2 Bleed Switches ON, APU Valve Open, and Isolation Valve Open",
  "explanation": "This describes the DUAL BLEED light scenario. When the APU bleed valve is open and both engine bleed sources can feed the same manifold (engine bleed switches ON with isolation valve open), there is a risk of backpressure to the APU or engines. The light warns the crew that thrust must be kept at idle."
 },
 {
  "section": "Pneumatics",
  "question": "What are the restrictions when this light is ON?",
  "answer": "Throttles idle if #1 Engine Bleed Open or #2 Engine Bleed Open and Isolation Valve Open",
  "explanation": "With the DUAL BLEED light on, thrust must be limited to idle because advancing the throttles could cause one bleed source to backpressure another, potentially damaging bleed valves or the APU. The restriction ensures safe coexistence of the APU and engine bleed sources."
 },
 {
  "section": "Pneumatics",
  "question": "We can operate a single engine taxi (On #2 Engine) with a dual bleed light on by _____.",
  "answer": "Closing the isolation valve",
  "explanation": "Closing the isolation valve separates the left and right pneumatic manifolds. With the isolation valve closed, the #2 engine bleed only feeds the right side and cannot reach the APU bleed on the left side. This eliminates the dual bleed condition and allows you to advance the #2 engine above idle for taxi."
 },
 {
  "section": "Pressurization",
  "question": "Normally, air is discharged overboard to maintain cabin pressure through the ____.",
  "answer": "Outflow valve",
  "explanation": "The outflow valve is the primary means of controlling cabin pressure. Bleed air constantly flows into the cabin, and the outflow valve modulates how much air escapes overboard. Opening the valve more lowers cabin pressure (higher cabin altitude), and closing it more raises cabin pressure (lower cabin altitude)."
 },
 {
  "section": "Pressurization",
  "question": "At a normal pressure differential, the cabin can maintain _____ ft. altitude with an aircraft altitude of 41,000 ft.",
  "answer": "8,000",
  "explanation": "The pressurization system is designed to maintain a maximum cabin altitude of 8,000 ft even at the airplane's maximum certified ceiling of 41,000 ft. This keeps the cabin at a comfortable and safe pressure for passengers without supplemental oxygen."
 },
 {
  "section": "Pressurization",
  "question": "The Auto Pressurization System consists of ____ identical controllers with ____ controller(s) alternately sequenced as (the) primary operational unit(s) for each new flight.",
  "answer": "2/1",
  "explanation": "There are two identical automatic pressurization controllers, and they alternate which one is primary for each new flight. This alternating scheme ensures both controllers get regular use, so a failure in either one would be discovered quickly rather than lying dormant."
 },
 {
  "section": "Pressurization",
  "question": "For the pressurization auto controller to function properly, ____ is required to be preset.",
  "answer": "Landing altitude and cruise altitude",
  "explanation": "The auto controller needs to know the cruise altitude (FLT ALT) to determine when to transition between climb and cruise modes, and the landing altitude (LAND ALT) to program the descent so the cabin arrives slightly pressurized at the destination. Without these inputs, the controller cannot properly schedule cabin pressure changes."
 },
 {
  "section": "Pressurization",
  "question": "To switch the pressurization to the auto alternate controller, you ____.",
  "answer": "Must select ALTN on the Cabin Pressurization Panel",
  "explanation": "Switching to the alternate auto controller requires a manual selection on the pressurization panel. However, if the primary controller fails (AUTO FAIL light), the system will automatically transfer to the alternate controller without crew action."
 },
 {
  "section": "Pressurization",
  "question": "The AUTO FAIL light will illuminate automatically due to ____.",
  "answer": "Loss of DC power",
  "explanation": "The AUTO FAIL light illuminates for several reasons, including loss of DC power, controller faults, outflow valve control faults, excessive differential pressure above 8.75 psi, excessive cabin rate beyond plus or minus 2,000 ft/min, or cabin altitude exceeding 15,800 ft. Loss of DC power is one trigger because the auto controllers and outflow valve motor run on DC power."
 },
 {
  "section": "Pressurization",
  "question": "When the pressurization AUTO FAIL light illuminates and the ALTN light does not, which statement is true?",
  "answer": "Both auto channels have failed",
  "explanation": "Normally when the primary controller fails, the system automatically transfers to the alternate and the ALTN light comes on. If AUTO FAIL is on but ALTN is not illuminated, it means the automatic transfer to the alternate also failed, indicating both controllers are inoperative. The crew would need to go to MAN mode."
 },
 {
  "section": "Pressurization",
  "question": "The OFF SCHEDULE DESCENT light illuminates. This is caused by the ____.",
  "answer": "Pilot starting a descent prior to reaching selected cruise altitude",
  "explanation": "The OFF SCHED DESCENT light means the airplane started descending before it ever reached the cruise altitude programmed in the FLT ALT window. The pressurization controller detects this mismatch and alerts the crew that it is now re-programming the cabin to return to the takeoff field elevation instead of the planned destination."
 },
 {
  "section": "Pressurization",
  "question": "If an OFF SCHEDULE DESCENT light comes on, the pressurization system will ____.",
  "answer": "Pressurize the cabin back to the takeoff airport altitude",
  "explanation": "When an off-schedule descent occurs, the controller assumes you are returning to where you departed from, since it does not know your new destination. It automatically programs the cabin to arrive at the takeoff field elevation. If you are diverting to a different airport, you will need to update both the FLT ALT and LAND ALT windows."
 },
 {
  "section": "Pressurization",
  "question": "The pressurization outflow VALVE position indicator operates in ____ mode(s).",
  "answer": "a. AUTO b. ALTN c. MANUAL d. all of the above",
  "explanation": "The outflow valve position indicator shows valve position regardless of which control mode is active. Whether the valve is being driven by the AUTO controller, the ALTN controller, or manual crew input, the indicator always displays the current valve position so the crew has situational awareness."
 },
 {
  "section": "Pressurization",
  "question": "When operating cabin pressure in MANUAL, the third motor powered by the DC standby system operates ____.",
  "answer": "Faster",
  "explanation": "In manual mode, the outflow valve is driven by a third motor powered by the DC standby bus. This motor moves faster than the auto controller motors, which means small switch movements can cause large and rapid cabin pressure changes. This is why the manual mode cautions warn about potential passenger discomfort or injury."
 },
 {
  "section": "Pressurization",
  "question": "The automatic cabin pressure control system descent mode is activated when ____.",
  "answer": "The aircraft descends 0.25 psi below the selected value in the Flight Altitude (FLT ALT) Indicator",
  "explanation": "The controller uses a 0.25 psi threshold to detect that a descent has begun. When the airplane descends enough that cabin differential drops 0.25 psi below what was needed at the set cruise altitude, the system transitions to descent mode and begins programming the cabin down to the landing altitude."
 },
 {
  "section": "Pressurization",
  "question": "If the external atmospheric pressure exceeds the internal cabin pressure, the ____ will open.",
  "answer": "Negative pressure relief valve",
  "explanation": "During a rapid descent, outside pressure could theoretically exceed cabin pressure, which would put inward loads on the fuselage that it is not designed for. The negative pressure relief valve prevents this by opening to equalize the pressure difference, protecting the fuselage structure."
 },
 {
  "section": "Pressurization",
  "question": "When operating on standby electrical power (battery only), the ____ cabin pressure controller is available.",
  "answer": "Manual",
  "explanation": "The automatic pressurization controllers require DC bus power that is not available on standby (battery-only) power. Only the manual controller is available because its motor runs on the DC standby bus, which is powered by the battery. This means the crew must manually control the outflow valve in a battery-only scenario."
 },
 {
  "section": "Pressurization",
  "question": "How long after takeoff is the ACARS engine takeoff report sent that warns the crew that there is an air conditioning panel configuration issue?",
  "answer": "Two minutes",
  "explanation": "About 30 seconds after takeoff, the ACARS sends an engine takeoff report. If the pack/bleed configuration could lead to a cabin altitude warning if left unchanged, the crew receives a NON-STANDARD BLEEDS/PACKS message via SELCAL chime approximately 2 minutes after takeoff, giving them time to correct the configuration."
 },
 {
  "section": "Pressurization",
  "question": "This light will illuminate for _____.",
  "answer": "loss of DC power controller or outflow valve control fault excessive ratio of cabin pressure change (+2,000 sea level feet/minute) All of the above",
  "explanation": "The AUTO FAIL light is triggered by multiple conditions: loss of DC power, controller fault, outflow valve control fault, excessive differential pressure above 8.75 psi, excessive cabin rate of climb or descent beyond 2,000 ft/min, and high cabin altitude above 15,800 ft. When it illuminates, the system auto-transfers to the alternate controller."
 },
 {
  "section": "Pressurization",
  "question": "This illuminated light on the Cabin Pressurization Panel indicates that _____",
  "answer": "Both pressure controllers have failed",
  "explanation": "When you see the AUTO FAIL light without the ALTN light, it means the system tried to transfer to the alternate controller but that one also failed. With both auto channels inoperative, the crew must select MAN mode and control the outflow valve manually."
 },
 {
  "section": "Pressurization",
  "question": "After moving the Pressurization Mode Selector to ALT per the QRH, the AUTO FAIL light remains illuminated. The QRH now directs to move this switch to MAN. What affect does this step have on the pressurization system?",
  "answer": "The manual controller moves the outflow valve at a faster rate than the auto controllers",
  "explanation": "If selecting ALTN did not resolve the AUTO FAIL, both auto controllers have failed. Going to MAN gives the crew direct control of the outflow valve via the faster DC standby motor. The faster rate means the crew must make very small, careful adjustments to avoid rapid cabin pressure changes that could injure passengers."
 },
 {
  "section": "Pressurization",
  "question": "In flight, at 29,000 ft, these lights illuminate on the Cabin Pressurization Panel. What is the status of the pressurization controllers?",
  "answer": "The primary auto controller has failed and the system has automatically switched to the standby auto controller (ALTN Mode)",
  "explanation": "When the AUTO FAIL and ALTN lights illuminate together, it means the primary controller detected a fault and the system automatically transferred control to the standby (alternate) controller. The ALTN light confirms the backup is now active and controlling the outflow valve."
 },
 {
  "section": "Pressurization",
  "question": "How does this condition affect the operation of the pressurization system?",
  "answer": "There is no difference in operation when using the standby auto controller",
  "explanation": "The two auto controllers are identical in design and capability. When the system transfers to the alternate controller, pressurization continues to operate exactly the same way. The crew should not notice any difference in cabin pressure management."
 },
 {
  "section": "Pressurization",
  "question": "In this situation, the QRH directs placing the pressurization mode in ALTN. What indications should you have after this step is accomplished?",
  "answer": "The AUTO FAIL light extinguishes and the ALTN light remains illuminated",
  "explanation": "When you manually select ALTN, you are confirming the system's automatic transfer. The AUTO FAIL light extinguishes because you have acknowledged the failure and selected a working controller. The ALTN light stays on to indicate you are operating on the backup controller."
 },
 {
  "section": "Pressurization",
  "question": "The crew has elected to return to the departure airport. During descent, this light illuminates on the Cabin Pressurization Panel. What other crew action is required in conjunction with this light being on?",
  "answer": "No other action is required. The controller will program the cabin to land at the Takeoff field elevation",
  "explanation": "The OFF SCHED DESCENT light means the airplane descended before reaching the planned cruise altitude. Since you are returning to the departure airport, the controller has already automatically re-programmed the cabin to arrive at the takeoff field elevation, which is exactly where you are going. No additional crew action is needed."
 },
 {
  "section": "Pressurization",
  "question": "The departure airport is now closed for weather and the crew elects to fly to an alternate destination at a flight altitude lower than planned. With this light on, the crew should _________.",
  "answer": "Change both the FLT ALT and LAND ALT windows",
  "explanation": "With the OFF SCHED DESCENT light on, the controller is programmed to return to the takeoff field elevation. Since you are now diverting to a different airport at a different altitude, you must update both the FLT ALT (new cruise altitude) and LAND ALT (alternate airport elevation) so the controller can properly schedule the cabin for the new plan. Note that changing the FLT ALT indicator will lose the auto-abort capability."
 },
 {
  "section": "Pressurization",
  "question": "What is the reason why this light originally illuminated?",
  "answer": "The aircraft started descent prior to reaching the cruise altitude set in the FLT ALT window",
  "explanation": "The OFF SCHED DESCENT light illuminates whenever the airplane begins descending before reaching the altitude set in the FLT ALT window. The pressurization controller expected to reach that cruise altitude, and when the airplane started going down early, the controller flagged it as an off-schedule event and reprogrammed accordingly."
 },
 {
  "section": "Ice and Rain Protection",
  "question": "The anti-ice and rain system includes ____.",
  "answer": "window heat, windshield wipers, probe and sensor heat engine anti-ice wing anti-ice all of the above",
  "explanation": "The 737 has five subsystems for ice and rain protection: engine anti-ice (cowl heating), wing anti-ice (leading edge slat heating), window heat (electrical heating of windshields), probe heat (pitot tubes, alpha vanes, TAT probe), and rain removal (wipers plus permanent hydrophobic coating). Together they cover all critical surfaces and sensors."
 },
 {
  "section": "Ice and Rain Protection",
  "question": "____ flight deck windows are heated.",
  "answer": "The #1 and #2.",
  "explanation": "Only the No. 1 (forward) and No. 2 (side) windows are electrically heated because they are glass/vinyl laminate construction that can incorporate heating elements. The No. 3 (rear) windows are acrylic panes with an air space and are not heated."
 },
 {
  "section": "Ice and Rain Protection",
  "question": "Which cockpit window is not electrically heated?",
  "answer": "#3 left & right",
  "explanation": "The No. 3 windows are made of acrylic panes with an air space between them, rather than the glass/vinyl laminate used in the No. 1 and No. 2 windows. Their construction does not incorporate heating elements, so they rely on the insulating air gap instead."
 },
 {
  "section": "Ice and Rain Protection",
  "question": "The rain removal system consists of ____.",
  "answer": "windshield wipers a permanent rain repellant coating on the window 1 and 3 above",
  "explanation": "The 737 uses windshield wipers and a permanent hydrophobic coating on the forward windows for rain removal. There is no fluid-based rain repellent system. The wipers should never be operated on a dry windshield to avoid scratching."
 },
 {
  "section": "Ice and Rain Protection",
  "question": "Which of the following are electrically heated?",
  "answer": "Pitot and TAT probes Alpha vanes both above",
  "explanation": "The pitot tubes, TAT probe, and alpha vanes are all electrically heated to prevent ice from blocking or distorting these critical air data sensors. Notably, the static ports are not heated because their flush-mounted design makes them less susceptible to ice accumulation."
 },
 {
  "section": "Ice and Rain Protection",
  "question": "The engine anti-ice system uses engine bleed air to prevent ice formation on the ____.",
  "answer": "engine cowl lip only",
  "explanation": "On the NG fleet, engine anti-ice protects only the cowl lip using 5th stage bleed air. The cowl lip is the forward-facing engine inlet edge where ice is most likely to form and could break off into the engine. On the MAX, the system also includes automatic core anti-ice controlled by the EEC."
 },
 {
  "section": "Ice and Rain Protection",
  "question": "The wing anti-ice system uses engine bleed air to prevent ice formation on ____.",
  "answer": "three inboard leading edge slats",
  "explanation": "Wing anti-ice protects only the three inboard leading edge slats on each wing because these are the most aerodynamically critical surfaces for ice protection. The outboard slats and leading edge flaps are not protected. The system uses bleed air from the pneumatic manifold and is effective regardless of slat position."
 },
 {
  "section": "Ice and Rain Protection",
  "question": "The amber COWL ANTI-ICE light illuminates because of ____.",
  "answer": "excessive pressure in the duct leading to the cowl lip",
  "explanation": "The COWL ANTI-ICE amber light is an overpressure warning for the duct supplying hot bleed air to the cowl lip. Excessive pressure could indicate a valve malfunction or restriction, and the light alerts the crew to the abnormal condition."
 },
 {
  "section": "Ice and Rain Protection",
  "question": "A bright blue COWL VALVE OPEN light indicates ____.",
  "answer": "related cowl anti-ice valve is in transit OR ALSO: cowl anti-ice valve position disagrees with related ENGINE ANTI-ICE Switch position",
  "explanation": "On the NG, the blue COWL VALVE OPEN light has two brightness levels. Bright means either the valve is moving (in transit) or the valve position does not match the switch position (disagree). Both conditions warrant attention because the valve is not where it should be."
 },
 {
  "section": "Ice and Rain Protection",
  "question": "A dim blue COWL VALVE OPEN light indicates the ____.",
  "answer": "valve is open",
  "explanation": "On the NG, when the cowl anti-ice valve is fully open and the ENGINE ANTI-ICE switch is ON, the blue COWL VALVE OPEN light goes dim. Dim means normal operation with the valve open and in agreement with the switch. This is the expected steady-state indication when engine anti-ice is in use."
 },
 {
  "section": "Ice and Rain Protection",
  "question": "A green TAI displayed above the N1 gauge indicates ____.",
  "answer": "the cowl valve is open",
  "explanation": "The green TAI (Thermal Anti-Ice) indication on the engine display confirms that the cowl anti-ice valve is open and the switch is ON, meaning hot bleed air is flowing to the cowl lip. If the TAI shows amber instead, it means the valve position disagrees with the switch, indicating a problem."
 },
 {
  "section": "Ice and Rain Protection",
  "question": "A bright blue wing anti-ice VALVE OPEN light indicates ____.",
  "answer": "related wing anti-ice control valve is in transit OR ALSO: wing anti-ice control valve position disagrees with WING ANTI ICE Switch position",
  "explanation": "Just like the cowl valve light, the bright blue wing VALVE OPEN light on the NG means the valve is either moving or its position does not match the switch. This is the same bright/dim logic: bright indicates transit or disagree, and you would expect it to go dim once the valve reaches its commanded position."
 },
 {
  "section": "Ice and Rain Protection",
  "question": "The FWD window heat switch controls heat to which window(s)?",
  "answer": "#1",
  "explanation": "The FWD WINDOW HEAT switches control the No. 1 (forward) windows, while the SIDE WINDOW HEAT switches control the No. 2 (side) windows. Window heat is important not just for anti-ice but primarily to maintain the correct temperature for maximum bird-strike resistance."
 },
 {
  "section": "Ice and Rain Protection",
  "question": "What happens if an overheat condition is detected in windows #1 or #2?",
  "answer": "Power is automatically removed.",
  "explanation": "The window heat system has built-in overheat protection that automatically removes electrical power if the window gets too hot. This prevents damage to the glass/vinyl laminate structure. The OVERHEAT lights also illuminate to alert the crew."
 },
 {
  "section": "Ice and Rain Protection",
  "question": "On the ground with the WING ANTI-ICE switch ON, both anti-ice control valves close if ____.",
  "answer": "thrust on either engine is above the setting for takeoff warning activation",
  "explanation": "On the ground, the wing anti-ice valves have a thrust interlock that closes them if either engine exceeds takeoff warning thrust. This prevents wing anti-ice from robbing bleed air during the takeoff roll when you need maximum engine performance. The valves reopen when thrust comes back down."
 },
 {
  "section": "Ice and Rain Protection",
  "question": "Wing Anti-Ice should be used on the ground in icing conditions unless ____.",
  "answer": "Type II or IV fluid has been applied",
  "explanation": "Type II and IV de-icing fluids are designed to provide holdover protection that prevents ice from re-forming on treated surfaces. If these fluids have been applied, using wing anti-ice heat could degrade or melt the fluid coating prematurely, reducing its protective effectiveness."
 },
 {
  "section": "Ice and Rain Protection",
  "question": "If required, after takeoff, wing anti-ice should not be turned ON below ____.",
  "answer": "1000 feet AGL",
  "explanation": "Turning on wing anti-ice diverts bleed air from the engines, which reduces available thrust. Below 1,000 ft AGL during the critical phase of flight after takeoff, the priority is on climb performance and obstacle clearance, so wing anti-ice activation is deferred until a safer altitude."
 },
 {
  "section": "Ice and Rain Protection",
  "question": "In flight activation of ENGINE ANTI-ICE Switches will cause ____.",
  "answer": "a. stick shaker logic to be set for icing conditions b. activation of engine ignition (selector AUTO) c. adjustment of engine idle to approach idle d. all of the above to occur",
  "explanation": "Turning on engine anti-ice in flight does three things: it adjusts stick shaker and speed bars to account for potential ice contamination on the wings, it activates continuous ignition to protect against flameout from ice ingestion, and it raises the idle speed to approach idle to maintain adequate bleed pressure and engine responsiveness."
 },
 {
  "section": "Ice and Rain Protection",
  "question": "In flight, the Wing Anti-ice Switch is turned OFF after having been on, the result is _________.",
  "answer": "stick shaker logic remains set for icing conditions",
  "explanation": "This is one of the most important things to remember: once wing anti-ice has been used in flight, the stall warning logic is permanently set to icing conditions for the remainder of that flight. Even if you turn wing anti-ice off, the stick shaker and min maneuver speed bars stay adjusted. This is irreversible until the next flight."
 },
 {
  "section": "Ice and Rain Protection",
  "question": "If the cowl anti-ice valve fails to open when the ENGINE ANTI-ICE Switch is placed to ON, ____.",
  "answer": "the COWL VALVE OPEN light illuminates bright blue OR ALSO: the amber TAI indication illuminates above the N1 display",
  "explanation": "When the switch is ON but the valve fails to open, the system detects a disagree condition. The COWL VALVE OPEN light goes bright blue (not dim, which would indicate normal open) and the TAI indication shows amber (not green, which would indicate normal agreement). Both indications tell you the valve is not doing what was commanded."
 },
 {
  "section": "Ice and Rain Protection",
  "question": "Engine anti-ice must be on during flight operations in all icing conditions except climb and cruise with temperatures below ____ degrees C.",
  "answer": "-40",
  "explanation": "At temperatures below minus 40 degrees C, the air is so cold that it contains virtually no liquid water. Any moisture at those temperatures exists as ice crystals, which generally do not adhere to surfaces and pose much less of an icing threat. So engine anti-ice is not required in those extremely cold conditions during climb and cruise."
 },
 {
  "section": "Ice and Rain Protection",
  "question": "(MAX) Core Anti-Ice:",
  "answer": "Is inoperative if the ENGINE ANTI-ICE light is illuminated. OR ALSO: The EECs automatically control the core anti-ice system.",
  "explanation": "The MAX has an additional core anti-ice system that the NG does not have. It is fully automatic and controlled by the EECs with no crew action required. However, if the amber ENGINE ANTI-ICE light is illuminated, it means this automatic core protection has failed or is inhibited, which the crew should be aware of for icing operations."
 },
 {
  "section": "Fire Protection",
  "question": "____ fire extinguishing bottle(s) is/are available for use on the APU.",
  "answer": "1",
  "explanation": "Unlike the engines which have two bottles (A and B) that can cross-feed to either engine, the APU only gets a single bottle. The APU is a smaller, less critical system located in the tail, so one bottle is considered sufficient for fire suppression."
 },
 {
  "section": "Fire Protection",
  "question": "If the battery switch is OFF, the APU has ____.",
  "answer": "fire extinguishing",
  "explanation": "Even with the battery switch OFF, the APU retains fire extinguishing capability because the auto-discharge feature is designed to work on the ground without crew present. This is a safety design so an APU fire that starts when the airplane is parked and unattended can still be suppressed automatically."
 },
 {
  "section": "Fire Protection",
  "question": "Placing the Test Switch in the FAULT/INOP position tests the _____.",
  "answer": "fault detection circuits for both engines and the APU",
  "explanation": "The FAULT/INOP test position specifically checks whether the system can correctly identify when a detection loop has failed. This is separate from testing the fire warning itself; it verifies the monitoring circuits that watch the health of the detection loops on both engines and the APU."
 },
 {
  "section": "Fire Protection",
  "question": "What indicates the engine fire extinguishing agent has been discharged?",
  "answer": "An amber L or R BOTTLE DISCHARGE light",
  "explanation": "After you pull and rotate the fire switch to discharge a bottle, the amber BOTTLE DISCHARGE light confirms the agent actually left the bottle. This is important feedback because you need to know the agent was successfully delivered before deciding whether to discharge the second bottle."
 },
 {
  "section": "Fire Protection",
  "question": "Fire detection for the engines and APU is available when the battery switch is ______.",
  "answer": "ON",
  "explanation": "The fire detection loops need electrical power to function and send a warning signal. With the battery switch ON, the detection system is powered and can sense overheat conditions in the engine nacelles and APU compartment, triggering the appropriate warnings on the flight deck."
 },
 {
  "section": "Fire Protection",
  "question": "In flight, failure of a cargo compartment smoke detector loop will ____.",
  "answer": "not be indicated unless both loops fail",
  "explanation": "The cargo smoke detection system uses redundant loops, and losing one loop still leaves the other to detect smoke. The system is designed to not annoy the crew with a fault indication for a single loop failure in flight since detection capability remains. Only if both loops fail does the system alert the crew to the loss of detection."
 },
 {
  "section": "Fire Protection",
  "question": "The engine fire extinguishing bottles are discharged ____.",
  "answer": "by pulling and manually turning the fire switch",
  "explanation": "This is a two-step process by design. Pulling the fire switch isolates the engine (cuts fuel, generator, bleed air, hydraulics) and arms the bottle. Then you must physically rotate the switch to discharge the agent. This deliberate sequence prevents accidental discharge and ensures the engine is fully isolated before you fight the fire."
 },
 {
  "section": "Fire Protection",
  "question": "The APU fire bottle is discharged ____.",
  "answer": "by pulling and rotating the APU fire switch",
  "explanation": "Just like the engine fire switches, the APU uses a pull-then-rotate sequence. Pulling isolates the APU (shuts off fuel, trips the generator, closes the bleed valve) and arms the bottle, while rotating actually discharges the extinguishing agent into the APU compartment."
 },
 {
  "section": "Fire Protection",
  "question": "How do you extinguish a wheel well fire?",
  "answer": "Lower the landing gear.",
  "explanation": "The wheel well has detection but no fire extinguisher bottles. Lowering the gear opens the wheel well doors, which vents the compartment and starves the fire of the enclosed heat buildup. The wheel well is designed to be fire-resistant, so the strategy is to ventilate rather than suppress."
 },
 {
  "section": "Fire Protection",
  "question": "Pulling the APU fire switch ____.",
  "answer": "closes the APU Inlet Door deactivates the fuel solenoid and closes the APU Fuel Shutoff Valve closes the APU Bleed Air Valve accomplishes all of the above",
  "explanation": "The APU fire switch pull is a comprehensive isolation action. It cuts off everything feeding the APU: fuel supply is stopped, bleed air is closed, the inlet door shuts, and the generator trips off the bus. The idea is to starve the fire of fuel and air while also arming the extinguisher bottle for discharge."
 },
 {
  "section": "Fire Protection",
  "question": "The ____ are equipped with smoke detection equipment.",
  "answer": "lavatories",
  "explanation": "Lavatories are a known fire risk because passengers may attempt to smoke in them despite regulations. Smoke detectors in each lavatory provide early warning, and each waste container has an automatic fire extinguisher that discharges if temperature gets too high, requiring no crew action."
 },
 {
  "section": "Fire Protection",
  "question": "The APU wheel well fire warning horn operates on the ground with the battery switch ____.",
  "answer": "ON",
  "explanation": "The ground-based fire warning horn in the wheel well area is designed to alert ground personnel to an APU or wheel well fire when the airplane may be unattended. It needs battery power to function, so the battery switch must be ON for this horn to sound."
 },
 {
  "section": "Fire Protection",
  "question": "If the APU fire detection system is inoperative (APU DET INOP), the APU will _____.",
  "answer": "continue to operate",
  "explanation": "A failed detection system does not shut down the APU. The APU itself is mechanically fine; it is just the fire sensing capability that is lost. You lose the ability to detect a fire, but the APU keeps running. The crew should be aware they have no fire protection for the APU in this condition."
 },
 {
  "section": "Fire Protection",
  "question": "Following a dual loop failure on an engine, you would expect to see ____.",
  "answer": "a FAULT light",
  "explanation": "Each engine has two detection loops (A and B). If one fails, the other still provides detection with a 5-second delay. But if both loops fail, there is no fire detection capability for that engine, and the FAULT light illuminates to tell the crew that fire detection is completely lost."
 },
 {
  "section": "Fire Protection",
  "question": "Some of the indications for an engine fire warning are Master Caution and OVHT/DET annunciator lights, the Engine OVERHEAT light, the Master FIRE WARN light, and the red Fire Switch light. What is another?",
  "answer": "The Fire Warning Bell",
  "explanation": "The fire warning system uses multiple layers of annunciation to make sure the crew does not miss it. The fire bell is an aural alert that grabs attention even if the crew is heads-down. It can be silenced by pressing either Master FIRE WARN light or the BELL CUTOUT switch."
 },
 {
  "section": "Fire Protection",
  "question": "While in flight, you observe these indications. The Fire Bell is also sounding. What is your conclusion?",
  "answer": "The number 1 engine indicates a fire condition.",
  "explanation": "When you see the Master FIRE WARN lights, hear the fire bell, and see the #1 engine fire switch light illuminated in red, all of these together point to a fire condition on the number 1 engine. The red fire switch light specifically identifies which engine has the fire."
 },
 {
  "section": "Fire Protection",
  "question": "Before consulting the QRH procedure, the crew elects to reset the Fire Warning System by pressing the Fire Warning BELL CUTOUT Switch or either Master FlRE WARN Light. Which of the following indications will now occur?",
  "answer": "The Fire Warning Bell will silence and the Master FIRE WARN lights on the glare shield will extinguish and reset.",
  "explanation": "Pressing the BELL CUTOUT switch or a Master FIRE WARN light silences the bell and resets the glareshield warning lights so you can see if the fire warning re-triggers. The fire switch light on the overhead panel stays illuminated as long as the fire condition persists, giving you continued indication of which engine is affected."
 },
 {
  "section": "Fire Protection",
  "question": "After resetting the Fire Warning System you reduce the # 1 Engine Throttle to idle thrust and the #1 Engine Fire Handle Light extinguishes. Under these circumstances, _____.",
  "answer": "Action must be taken to first override a locked Fire Handle before pulling the applicable Fire Handle. Do not rotate the pulled #1 Engine Fire Handle",
  "explanation": "The fire handle normally unlocks automatically when a fire warning is active. If the fire handle light extinguishes (meaning the fire warning is no longer present), the handle re-locks. You would need to override the lock mechanism to pull it. Since the fire indication went away, you would not rotate to discharge the bottle because the fire condition appears to have resolved."
 },
 {
  "section": "Fire Protection",
  "question": "Both engines are operating in flight. In addition to the indications to the right, the Master FIRE WARN lights illuminate and the Fire Warning Bell sounds. Which of the following statements is correct?",
  "answer": "Engine #1 Fire Handle automatically unlocks.",
  "explanation": "When a fire warning activates for a specific engine, the system automatically unlocks that engine's fire handle so the crew can pull it without delay. This is a safety design that eliminates a step during an emergency, allowing immediate isolation of the affected engine."
 },
 {
  "section": "Fire Protection",
  "question": "In addition to the Engine #1 fire warnings already described, the crew notices the indications at right on the Upper Display Unit. Which statement below best describes these EGT indications?",
  "answer": "The maximum continuous EGT limit has been exceeded on Engine #1.",
  "explanation": "During an engine fire, it is common to see EGT rise above normal limits because the fire is adding heat to the engine nacelle area. An EGT exceedance on the same engine as the fire warning is consistent with and reinforces the fire indication."
 },
 {
  "section": "Fire Protection",
  "question": "Following the QRH procedure, the crew pulls (fully extends) the Fire Handle. Which statement below is not correct when Fire Handle #1 is pulled up?",
  "answer": "The left Bus Tie Breaker is tripped open.",
  "explanation": "Pulling the engine fire switch isolates many things: the generator trips off the bus, fuel valves close, bleed air closes, hydraulic flow stops, and boost pumps lose power. However, the bus tie breaker is not tripped open by the fire handle. The bus tie system is managed separately and actually needs to remain functional to allow the remaining generator to power both buses."
 },
 {
  "section": "Fire Protection",
  "question": "These indications, along with the Fire Bell, OVHT/DET Annunciator, Master FIRE WARN and MASTER CAUTION lights activate during the pre-flight test of the Fire/Overheat warning. Select the most correct statement.",
  "answer": "This is a proper test with the AC Busses powered normally.",
  "explanation": "During the fire/overheat test, you expect to see all the warning lights, bell, and annunciators activate to confirm the system is working correctly. Seeing all these indications together during a test is the normal, expected result that confirms the detection and warning systems are functional."
 },
 {
  "section": "Fire Protection",
  "question": "Suppose instead that a FAULT light illuminates during the Fire/Overheat Warning test and the #1 engine Fire Handle and ENG 1 OVERHEAT lights do not illuminate. Select the most correct statement.",
  "answer": "The number one engine has one Overheat/Fire Detector Loop inoperative.",
  "explanation": "A FAULT light during testing means one of the detection loops for that engine is not responding. Since the engine has two loops (A and B), losing one causes a FAULT indication during the test. The remaining good loop can still detect a fire, but with a 5-second delay instead of an immediate warning."
 },
 {
  "section": "Fire Protection",
  "question": "What is the proper course of action for any Fire and Overheat System test with an inoperative loop?",
  "answer": "Put the OVHT DET Switch to A and then B and re-test the system at each position. The FAULT light illuminates when the inoperative loop is selected. Select the good loop for both OVHT DET switches and leave the panel in this configuration.",
  "explanation": "By testing each loop individually (A then B), you can identify which specific loop has failed. The FAULT light appears when you select the broken loop. You then configure the OVHT DET switches to the good loop so the system uses the working loop for detection, giving you the best available protection for the flight."
 },
 {
  "section": "Fire Protection",
  "question": "What light(s) on the Overheat/Fire Detection panel will cause the Master Caution light to illuminate?",
  "answer": "Engine Overheat lights or APU Det Inop",
  "explanation": "The Master Caution light is triggered by amber-level warnings, not red fire warnings. Engine overheat (amber) and APU DET INOP (amber) are caution-level conditions that go through the Master Caution system. Actual fire warnings bypass Master Caution and go directly to the red Master FIRE WARN lights and fire bell."
 },
 {
  "section": "Flight Controls",
  "question": "The primary flight controls consist of _____.",
  "answer": "ailerons, elevators, and rudder",
  "explanation": "These are the three surfaces that directly control the airplane in the three axes of flight: ailerons for roll, elevators for pitch, and rudder for yaw. Everything else (flaps, slats, spoilers, stabilizer trim) is considered a secondary flight control."
 },
 {
  "section": "Flight Controls",
  "question": "The primary flight controls are normally powered by hydraulic system(s) ____.",
  "answer": "A and B",
  "explanation": "Having both systems A and B power the primary controls provides redundancy. Each surface has power control units (PCUs) connected to both hydraulic systems, so if one system fails, the other can still move the ailerons, elevators, and rudder. This dual-source design is fundamental to the 737's flight control safety."
 },
 {
  "section": "Flight Controls",
  "question": "____ can be extended by the Standby Hydraulic System in Alternate mode.",
  "answer": "Leading edge flaps/slats",
  "explanation": "Leading edge devices normally run on System B hydraulics. If System B fails, the standby hydraulic system can extend the LE devices to their full position as an alternate method. However, standby hydraulics can only extend them, not retract them, so this is a one-way backup."
 },
 {
  "section": "Flight Controls",
  "question": "If a FEEL DIFF PRESS light illuminates, ____.",
  "answer": "No crew action is required in flight. Continue normal operations.",
  "explanation": "The FEEL DIFF PRESS light indicates excessive differential hydraulic pressure in the elevator feel computer, but this is an informational indication that does not affect controllability. The elevator feel system still functions, and no immediate action is needed in flight."
 },
 {
  "section": "Flight Controls",
  "question": "When the Flaps/Slats Electronics Unit (FSEU) detects a trailing edge asymmetry or skew condition, the FSEU closes the TE Flap Bypass Valve, ____.",
  "answer": "and displays a needle split on the Flap Position Indicator",
  "explanation": "When the FSEU senses that the left and right trailing edge flaps are not in the same position (skew/asymmetry), it stops flap movement by closing the bypass valve to prevent the condition from getting worse. The needle split on the flap position indicator visually shows the crew that the two sides are at different positions."
 },
 {
  "section": "Flight Controls",
  "question": "On aircraft 3AA - 3LB, load relief for the Trailing edge flaps is only provided for flaps ____.",
  "answer": "30 and 40",
  "explanation": "On the NG fleet (3AA-3LB), the flap load relief system only protects the flaps 30 and 40 positions by automatically retracting to the next lower setting if airspeed gets too high. The MAX fleet expanded this protection to cover flaps 10, 15, 25, 30, and 40. The NG system is more limited in scope."
 },
 {
  "section": "Flight Controls",
  "question": "During alternate flap operation, the TE flaps are positioned using ____ power.",
  "answer": "electrical",
  "explanation": "The normal flap system uses System B hydraulics to drive the trailing edge flaps. When you switch to alternate flap operation (via the ALT FLAPS master switch), an electric motor takes over to position the TE flaps. This gives you a completely independent backup power source that does not depend on the hydraulic system."
 },
 {
  "section": "Flight Controls",
  "question": "The SPEED BRAKE lever will automatically move to the down detent, and all spoilers will retract, if ____.",
  "answer": "either throttle is advanced after landing",
  "explanation": "This is a safety feature for go-arounds or rejected landings. If the crew advances a throttle after touchdown, the airplane assumes you need to accelerate, so it automatically stows the speed brakes to remove the drag and restore lift. You do not want speed brakes deployed while trying to climb out."
 },
 {
  "section": "Flight Controls",
  "question": "In the event hydraulic systems A and B fail, the ailerons and elevators can be operated ____ and the rudder must be operated by the ____ system.",
  "answer": "mechanically (manually via cables to trim-tabs), standby (hydraulic)",
  "explanation": "This is manual reversion. The ailerons and elevators have direct cable connections from the cockpit controls, so you can still move them by hand, though with higher forces. The rudder cannot be moved manually due to its size and aerodynamic loads, so it requires the standby hydraulic system to power the standby rudder PCU."
 },
 {
  "section": "Flight Controls",
  "question": "Normally, the ailerons, elevators, and rudder are powered by the ____",
  "answer": "A & B hydraulic systems",
  "explanation": "All three primary flight control surfaces get hydraulic power from both System A and System B for redundancy. Each surface's power control units have connections to both systems, ensuring that losing one hydraulic system still leaves full powered flight control capability."
 },
 {
  "section": "Flight Controls",
  "question": "Hydraulic System A pressure to the Main Rudder PCU is reduced at airspeeds above approximately ______ knots.",
  "answer": "135",
  "explanation": "This is the rudder limiter in action. At higher speeds, full rudder authority could overstress the vertical stabilizer, so the system reduces hydraulic pressure from both A and B by about 25% each above approximately 137 knots (some references round to 135). This limits how much rudder deflection is available at speed to protect the airframe."
 },
 {
  "section": "Flight Controls",
  "question": "If the aileron control system is jammed, the ____ can still fly the aircraft using the ____ after force is applied to the control wheels and they break free.",
  "answer": "FO, spoilers",
  "explanation": "The aileron transfer mechanism is a key safety feature. The captain's wheel connects to the ailerons via cables, while the FO's wheel connects to the spoilers. If the ailerons jam, the FO can apply enough force to break the mechanical connection free and then use spoiler deflection to provide roll control."
 },
 {
  "section": "Flight Controls",
  "question": "With the trailing edge flaps at 1, the leading edge slats are ____.",
  "answer": "in the extend position",
  "explanation": "The leading edge devices are sequenced as a function of the trailing edge flap lever position. At flaps 1, the LE slats move to their extend position to provide additional lift at lower speeds. The LE and TE devices work together as a coordinated high-lift system."
 },
 {
  "section": "Flight Controls",
  "question": "The horizontal stabilizer is normally powered _____, but may also be operated _____.",
  "answer": "electrically, manually",
  "explanation": "The stabilizer trim is normally moved by electric motors activated by the trim switches on the control wheels or by the autopilot. If electric trim fails, the manual trim wheels (connected directly by cables) can position the stabilizer. The manual trim wheel actually has the greatest range of authority of any trim method."
 },
 {
  "section": "Flight Controls",
  "question": "On the ground, speed brakes normally use _____ to destroy lift and make braking more effective.",
  "answer": "both flight and ground spoilers",
  "explanation": "On the ground, you want maximum lift destruction to put weight on the wheels for braking. All 12 spoiler panels deploy: the 8 flight spoiler panels plus the 4 ground spoiler panels. Ground spoilers only work on the ground and are powered exclusively by System A."
 },
 {
  "section": "Flight Controls",
  "question": "Leading edge devices can be _____ by the Standby Hydraulic System if System B fails.",
  "answer": "extended",
  "explanation": "The standby hydraulic system serves as a backup to extend the LE devices to their full position if System B (the normal source) is lost. However, the standby system can only push them out, not pull them back in. Once extended via standby, they stay extended."
 },
 {
  "section": "Flight Controls",
  "question": "The _____ of the Stab Trim Indicator corresponds to the allowable range of trim settings for takeoff.",
  "answer": "green band",
  "explanation": "The green band on the stabilizer trim indicator marks the acceptable trim range for takeoff. If the trim is set outside this green band when the throttles are advanced, a takeoff warning horn will sound to alert the crew that the trim is not properly set for departure."
 },
 {
  "section": "Flight Controls",
  "question": "On aircraft 3AA-3LB, the autoslat feature is available in flight",
  "answer": "with trailing edge flaps selected to 1, 2, or 5",
  "explanation": "On the NG fleet, autoslats are available at flaps 1, 2, and 5. The autoslat system automatically drives the LE slats to full extend near a stall condition, providing extra protection at low speed. The MAX expanded autoslat availability to include flaps 10, 15, and 25 as well."
 },
 {
  "section": "Flight Controls",
  "question": "In aircraft 3AA-3LB, the LE devices will go to the full extend position when you select _____ or greater with the flap handle.",
  "answer": "10",
  "explanation": "On the NG, at flaps 1 through 5 the LE slats go to the extend position. At flaps 10 and above, they move to the full extend position, which provides maximum leading edge camber and lift augmentation for the slower approach and landing speeds."
 },
 {
  "section": "Flight Controls",
  "question": "If we move the flap lever from 5 to 10, but the leading edge devices all stay in the extend position, the ____ Light will be illuminated.",
  "answer": "LE FLAPS TRANSIT",
  "explanation": "The LE FLAPS TRANSIT light illuminates whenever the leading edge devices are not in the position that the FSEU has programmed for the current trailing edge flap setting. Since flaps 10 calls for LE devices at full extend but they are stuck at extend, there is a mismatch, and the transit light tells you they have not reached their commanded position."
 },
 {
  "section": "Flight Controls",
  "question": "The maximum altitude for extension of flaps is ____ feet.",
  "answer": "20,000",
  "explanation": "Flaps and slats should not be extended above 20,000 feet. At very high altitudes, the thinner air and different aerodynamic loads could cause structural issues with the flap mechanisms, and there is generally no operational reason to have flaps out that high."
 },
 {
  "section": "Flight Controls",
  "question": "Leading edge devices are normally operated by ____.",
  "answer": "Hydraulic System B only",
  "explanation": "Both LE devices and TE flaps are normally powered by System B hydraulics. This is why a System B failure is a bigger deal for the high-lift system than a System A failure. If System B is lost, you need alternate methods: standby hydraulics for LE devices and the electric motor for TE flaps."
 },
 {
  "section": "Flight Controls",
  "question": "Roll control is normally provided by the ailerons, assisted by _____.",
  "answer": "flight spoilers",
  "explanation": "The ailerons are the primary roll control surface, but the flight spoilers on the up-aileron side also rise to augment the roll rate. This spoiler assist provides additional roll authority beyond what the ailerons alone can generate, especially useful at higher speeds."
 },
 {
  "section": "Flight Controls",
  "question": "With the SPEED BRAKE Lever in the DOWN detent, how can the speedbrakes be deployed on landing?",
  "answer": "The pilot can raise the lever manually. The speedbrake lever will automatically move to full up position when the reverse thrust levers are moved to reverse when above 60 knots. Both are correct.",
  "explanation": "Even if the speed brake lever was not armed before landing, you have two options. You can manually raise the lever, or the speed brakes will auto-deploy when you select reverse thrust above 60 knots. This provides a backup path to get the spoilers up for braking even if arming was missed."
 },
 {
  "section": "Flight Controls",
  "question": "When using the SPEED BRAKE in flight, the speedbrake lever should _____.",
  "answer": "Not be moved beyond the flight detent",
  "explanation": "The flight detent is a physical stop on the speed brake lever that limits in-flight deployment to only the flight spoiler panels. Moving beyond the flight detent could command ground spoiler deployment, which is only appropriate on the ground. The detent prevents inadvertent ground spoiler extension in flight."
 },
 {
  "section": "Flight Controls",
  "question": "The LE FLAPS TRANSIT light illuminated indicates _____. Select the most correct answer.",
  "answer": "leading edge devices are in transit leading edge devices are not in the programmed position with respect to the trailing edge flaps a leading edge device asymmetry any of the above",
  "explanation": "The LE FLAPS TRANSIT light is a multi-purpose indicator. It covers normal transit (devices are moving between positions), any mismatch between where the LE devices are and where they should be based on the TE flap setting, and asymmetric conditions where left and right sides are not matched. Any of these situations will illuminate the light."
 },
 {
  "section": "Flight Controls",
  "question": "If wheel spin-up is not detected by the air/ground sensors, the flight spoilers will deploy when _____.",
  "answer": "any main gear strut compresses",
  "explanation": "The normal ground spoiler auto-deploy logic uses wheel spin-up as the primary trigger. If the wheel speed sensors fail to detect spin-up (perhaps on a slippery runway), the backup trigger is main gear strut compression. This ensures the spoilers still deploy on landing even without wheel spin-up data."
 },
 {
  "section": "Flight Controls",
  "question": "Prior to what altitude should the Speed Brakes be down or Armed?",
  "answer": "1000 FT AGL",
  "explanation": "By 1000 feet AGL on approach, the speed brakes should either be fully stowed or armed for automatic deployment on landing. This is a standard operating procedure to ensure the airplane is in a stabilized configuration for the final approach and that the spoilers are ready to deploy immediately on touchdown."
 },
 {
  "section": "Flight Controls",
  "question": "While extending the flaps electrically through the 5 degree flap position, if you still observe these lights, ____.",
  "answer": "the flaps have not approached the flaps 10 degree position or beyond",
  "explanation": "During alternate (electric) flap extension, the LE devices transition at certain TE flap positions. If the transit lights are still showing as you pass through flaps 5, it means the TE flaps have not yet reached flaps 10 where the LE devices would move to their full extend position. The lights indicate the LE devices are still in transition relative to the commanded position."
 },
 {
  "section": "Flight Controls",
  "question": "When the flaps have been lowered to 15 degrees with the ALT system and a missed approach has been executed, the _____.",
  "answer": "TE flaps can be retracted with the ALT system but not the LE devices",
  "explanation": "The alternate flap system uses an electric motor for TE flaps, which can drive them in both directions (extend and retract). However, the LE devices on the alternate system use standby hydraulics, which can only extend them. So on a go-around, you can retract the TE flaps electrically but the LE devices will stay where they are."
 },
 {
  "section": "Flight Controls",
  "question": "(MAX 8) Fly-by-wire Spoiler system provides the following new features.",
  "answer": "Emergency Descent Spoilers (EDS). OR ALSO: Elevator Jam Landing Assist System.",
  "explanation": "The MAX replaced the NG's mechanical spoiler mixing with an electronic Spoiler Control Electronics unit, enabling new features not possible with the old system. EDS automatically extends spoilers further during an emergency descent above 30,000 feet, and the Elevator Jam Landing Assist uses spoilers for pitch path control if the elevator mechanism jams."
 },
 {
  "section": "Flight Controls",
  "question": "(MAX 8) Emergency Descent Speed Brakes system (EDS):",
  "answer": "Armed when the airplane is above 30,000 feet and the cabin altitude warning is active. OR ALSO: Fully automatic with operation transparent to the crew.",
  "explanation": "EDS is designed for rapid descent during a cabin depressurization at high altitude. When above 30,000 feet with a cabin altitude warning active, the system arms automatically and allows a higher spoiler deflection than normally available. It operates transparently so the crew can focus on the emergency descent procedure."
 },
 {
  "section": "Flight Controls",
  "question": "(MAX 8) The Spoiler Control Electronics Unit (SCEU):",
  "answer": "Translates signals from the speedbrake lever position sensor, the First Officer\u2019s control wheel and other airplane data inputs.",
  "explanation": "On the MAX, the SCEU replaces the NG's mechanical spoiler mixing system with electronic control. It takes inputs from the speed brake lever, the FO's control wheel (for roll augmentation via spoilers), and other airplane data to electronically command the spoiler actuators. This is what enables the MAX-specific features like EDS and MLA."
 },
 {
  "section": "Flight Controls",
  "question": "(MAX 8) The Spoiler light indicates:",
  "answer": "A fault in the spoiler system",
  "explanation": "On the MAX, the SPOILER light is a fault annunciation specific to the fly-by-wire spoiler system. Since the MAX uses electronic control of spoilers through the SCEU rather than mechanical linkages, a fault in this electronic system needs its own dedicated warning light to alert the crew."
 },
 {
  "section": "Flight Controls",
  "question": "(MAX 8) The Elevator Jam Landing Assist Switch is located on:",
  "answer": "Aft Overhead Panel",
  "explanation": "The Elevator Jam Landing Assist is a MAX-only feature that uses flight spoilers for pitch path control when the aft elevator mechanism is jammed. The switch is on the aft overhead panel because it is a non-normal, rarely used system that does not need to be on the primary flight control panels."
 },
 {
  "section": "Flight Controls",
  "question": "As you advance the thrust lever for takeoff, would you get an intermittent horn with the LEDs positioned as indicated?",
  "answer": "Yes. The LEDs are not in the proper position.",
  "explanation": "The takeoff warning system checks multiple items when the throttles are advanced. If the leading edge devices are not in the correct position for the selected flap setting, the intermittent warning horn sounds to prevent a takeoff with the high-lift system misconfigured, which could be catastrophic."
 },
 {
  "section": "Flight Controls",
  "question": "The previous condition has now been corrected. The takeoff warning sounds again. What else could cause this?",
  "answer": "Stab Trim not in green band or parking brake lever set.",
  "explanation": "The takeoff warning system checks several items: flap/slat position, stabilizer trim within the green band, speed brakes stowed, spoilers down, and parking brake released. If the LE devices are now correct but the horn still sounds, the stabilizer trim being outside the green band or the parking brake being set are the other common causes."
 },
 {
  "section": "Flight Controls",
  "question": "With the TE Flap/Leading Edge Devices set, Stab Trim in the green band, parking brake off, and speed brake handle stowed you still have a takeoff Warning Horn. What else could be causing this?",
  "answer": "Spoiler(s) are not fully down.",
  "explanation": "Even with the speed brake lever stowed, individual spoiler panels could be not fully faired (down). A spoiler panel that is slightly raised will trigger the takeoff warning because it would cause asymmetric lift or drag during the takeoff roll, which is a hazard."
 },
 {
  "section": "Flight Controls",
  "question": "During the origination pre-flight, this light illuminates alter the IRS Mode Selectors are to NAV. The \u201cFlight Control Panel...CHECK\u201d is accomplished by ____.",
  "answer": "Doing nothing. This is a normal indication while the IRUs are aligning.",
  "explanation": "Some flight control system lights illuminate during IRS alignment as a normal part of the power-up sequence. The system needs valid IRS data for certain functions, and while the IRUs are still aligning, the system flags this condition. Once alignment completes, the light should extinguish on its own."
 },
 {
  "section": "Flight Controls",
  "question": "This light and the Master Caution Lights self-illuminate during taxi-out.",
  "answer": "Check the MEL or call Maintenance. There is a dual channel failure of the Speed Trim System.",
  "explanation": "The SPEED TRIM FAIL light with Master Caution during taxi indicates a dual channel failure of the Speed Trim System, which means the system is completely inoperative. This is significant because the Speed Trim System (and MCAS on the MAX) provides speed stability augmentation. This requires checking the MEL to see if dispatch is allowed."
 },
 {
  "section": "Flight Controls",
  "question": "If instead, this light illuminates once you are in flight, the autopilot _____.",
  "answer": "is still fully operational.",
  "explanation": "The Speed Trim System operates only when the autopilot is NOT engaged. It provides speed stability augmentation for manual flight. So a SPEED TRIM FAIL light in flight does not affect autopilot operation at all. The autopilot has its own independent trim system and remains fully functional."
 },
 {
  "section": "Flight Controls",
  "question": "When positioning the flaps for takeoff from UP to 1, the crew noticed this condition. What could have caused this malfunction?",
  "answer": "Skewed T.E. Flap",
  "explanation": "A skewed trailing edge flap means the left and right TE flap surfaces are at different positions. The FSEU detects this asymmetry and stops further flap movement to prevent the condition from worsening. A needle split on the flap gauge would visually confirm the skew."
 },
 {
  "section": "Flight Controls",
  "question": "The __ protects the flaps in this condition.",
  "answer": "FSEU",
  "explanation": "The Flaps/Slats Electronics Unit continuously monitors the position of the flap surfaces. When it detects an asymmetry or skew, it closes the TE flap bypass valve to stop hydraulic flow and halt flap movement. This protection prevents structural damage from asymmetric flap deployment."
 },
 {
  "section": "Flight Controls",
  "question": "The FSEU protects the flaps during ____ operation.",
  "answer": "Normal Flap",
  "explanation": "The FSEU monitors and protects the flaps only during normal (hydraulic) flap operation. During alternate flap operation (electric motor), the FSEU is bypassed because the alternate system uses a different power path. This is why alternate flap operation requires more careful crew monitoring."
 },
 {
  "section": "Flight Controls",
  "question": "With the loss of B Hydraulic System, the yaw damper will ____.",
  "answer": "be inoperative, but the Yaw Damper Light will not be illuminated until the Flt control B switch is moved to STBY RUD",
  "explanation": "The main yaw damper runs on System B, so losing System B makes it inoperative. However, the yaw damper light does not illuminate immediately because the switch is still in the ON position. It is not until the B FLT CONTROL switch is moved to STBY RUD that the system logic recognizes the configuration change and illuminates the light."
 },
 {
  "section": "Flight Controls",
  "question": "Placing the B FLT CONTROL switch to STBY RUD will cause the YAW DAMPER switch to ______.",
  "answer": "trip OFF and illuminate the Yaw Damper Light",
  "explanation": "Moving the B FLT CONTROL switch to STBY RUD disconnects the main yaw damper from its System B power source. The yaw damper switch trips OFF as a result, and the yaw damper light illuminates to inform the crew that yaw damping is no longer active. The standby yaw damper can then be engaged separately."
 },
 {
  "section": "Flight Controls",
  "question": "Subsequently, the A Hydraulic System also fails. How would you gain control of the Standby Yaw Damper?",
  "answer": "Ensure both A and B Flight Control Switches are in the Standby Rudder Position and then place the Yaw Damper Switch ON.",
  "explanation": "With both A and B systems failed, you are in manual reversion. Both FLT CONTROL switches must be in STBY RUD to power the standby hydraulic system for rudder control. Then placing the yaw damper switch ON activates the standby yaw damper, which also provides rudder assist from control wheel inputs to help turn the airplane."
 },
 {
  "section": "Flight Controls",
  "question": "With the STAB TRIM positioned as indicated, what would happen when the throttles are advanced for TO with all other systems set properly?",
  "answer": "There would be no alert since this is the proper setting for TO.",
  "explanation": "When the stabilizer trim is within the green band on the trim indicator and all other takeoff configuration items are correct, advancing the throttles will not trigger the takeoff warning horn. The green band represents the acceptable trim range for takeoff."
 },
 {
  "section": "Flight Controls",
  "question": "If the trim was set to 10 units nose up and then the throttles are advanced for takeoff. What kind of alert would you get, if any?",
  "answer": "An intermittent warning horn",
  "explanation": "10 units nose up is well outside the green band on the stabilizer trim indicator. When the throttles are advanced with the trim outside the takeoff range, the takeoff warning system triggers an intermittent horn. This is the same horn that sounds for other configuration issues like improper flap settings or parking brake set."
 },
 {
  "section": "Flight Controls",
  "question": "While applying nose down trim, the electric trim stops. How can you continue to trim if you need more nose down trim?",
  "answer": "Trim manually.",
  "explanation": "Electric trim has limited authority: with flaps extended it goes from -0.45 to 14.0 units, and with flaps retracted from 3.85 to 14.0 units. If you have hit the electric trim limit or the electric trim has failed, the manual trim wheel connected directly by cables can still position the stabilizer. The manual trim wheel has the greatest authority of any trim method, ranging from -0.70 to 16.4 units."
 },
 {
  "section": "Flight Controls",
  "question": "Speed Brake Load Alleviation System operates in flight under what conditions?",
  "answer": "Flaps up, gross wt. greater than 155,000 lbs., airspeed greater than 320 kts",
  "explanation": "The Speed Brake Load Alleviation System automatically retracts the extended speed brakes during high-load conditions to protect the wing structure. It only activates when the airplane is heavy and fast with flaps up, which is when wing structural loads are highest and the additional drag from speed brakes could push loads beyond limits."
 },
 {
  "section": "Flight Controls",
  "question": "____ can be extended by the Standby Hydraulic System in Alternate mode.",
  "answer": "Leading edge flaps/slats",
  "explanation": "This is a repeated card emphasizing the same concept: when System B fails, the standby hydraulic system serves as the alternate power source to extend the leading edge devices. The standby system can push them out to full extend but cannot retract them, making it a one-way backup."
 },
 {
  "section": "Flight Controls",
  "question": "You observe these lights on the system B hydraulic panel. The QRH directs you to use the Alt Flaps procedure. After arming the Alt Flaps master switch, you extend the trailing edge flaps electrically. The leading edge flaps are extended ______.",
  "answer": "by the hydraulic fluid in the standby system",
  "explanation": "In the alternate flap configuration, the TE flaps use the electric motor and the LE devices use the standby hydraulic system. When you arm the ALT FLAPS switch and the standby system pressurizes, it drives the LE devices to their full extend position hydraulically, independent of the failed System B."
 },
 {
  "section": "Flight Controls",
  "question": "During normal operations with these two FLT CONTROL switches in the ON position. They control pressure to the respective _____.",
  "answer": "rudder, aileron, and elevator",
  "explanation": "The A and B FLT CONTROL switches control hydraulic shutoff valves that can isolate the primary flight control surfaces from their respective hydraulic systems. In the normal ON position, hydraulic pressure flows freely to the rudder, aileron, and elevator PCUs from both System A and System B."
 },
 {
  "section": "Flight Controls",
  "question": "After loss of system A, the QRH directs you to move the A FLT CONTROL switch to STBY RUD. This action will pressurize the ______.",
  "answer": "Standby Rudder and the #1 thrust reverser",
  "explanation": "Moving the A FLT CONTROL switch to STBY RUD activates the standby hydraulic system, which pressurizes the standby rudder PCU to provide backup rudder control. It also pressurizes the #1 thrust reverser, which needs hydraulic power for operation and would otherwise be unavailable with System A lost."
 },
 {
  "section": "Flight Controls",
  "question": "With this switch in STBY RUD position how would you know if the standby rudder valve is open?",
  "answer": "The Low pressure light under the A FLT CONTROL Switch extinguishes.",
  "explanation": "When the standby rudder valve opens and the standby hydraulic system pressurizes, it satisfies the pressure switch that monitors the A FLT CONTROL circuit. The LOW PRESSURE light extinguishes because the standby system has now provided adequate hydraulic pressure to the rudder, confirming the standby rudder valve is open and the system is working."
 },
 {
  "section": "Autoflight",
  "question": "What system provides N1 limits and target N1 for the A/T?",
  "answer": "FMC",
  "explanation": "The FMC is the brains behind thrust management. It calculates the appropriate N1 limits (like TO, CLB, CRZ) based on conditions like temperature, altitude, and derate selections, then feeds those targets to the autothrottle so it knows how much thrust to command."
 },
 {
  "section": "Autoflight",
  "question": "The A/P automatically disengages ____.",
  "answer": "when activating either pilot`s Control Wheel Trim Switch",
  "explanation": "The control wheel trim switches are one of five ways to manually disconnect the autopilot. The logic is that if a pilot is manually trimming, they're asserting manual control, so the AP should get out of the way. This is a quick, intuitive disconnect method since your thumb is already on the yoke."
 },
 {
  "section": "Autoflight",
  "question": "A Mode Control Panel switch illuminates to indicate mode ____ and that mode can be ____ by pressing the switch again.",
  "answer": "selection, deselected",
  "explanation": "The MCP switches are toggle-style: press once to select a mode (the switch light illuminates to confirm), press again to deselect it. This gives the pilot clear tactile and visual feedback about what modes are currently active."
 },
 {
  "section": "Autoflight",
  "question": "After LOC and G/S are both captured, the APP mode can be disengaged by ____. Select the most correct answer.",
  "answer": "pressing the TOGA Switch retuning the nav turning both F/Ds OFF and disengaging the A/P any of the above actions",
  "explanation": "Once you're captured on both localizer and glideslope, the system is deeply committed to the approach. You can't simply press the APP button again to back out. You need a more deliberate action like pressing TO/GA (initiating a go-around), retuning the nav radio (which breaks the ILS signal), or turning off both flight directors and the autopilot entirely."
 },
 {
  "section": "Autoflight",
  "question": "Turning a F/D switch ON displays command bars on the respective pilots PFD if ____.",
  "answer": "command pitch or roll modes are engaged",
  "explanation": "The flight director bars only appear when there's actually something to command. If no pitch or roll mode is engaged (like HDG SEL, LNAV, V/S, etc.), the FD has nothing to display, so the bars stay hidden even though the switch is ON."
 },
 {
  "section": "Autoflight",
  "question": "Independent FD operation is annunciated by ____.",
  "answer": "illumination of both MA lights",
  "explanation": "Normally both FCCs talk to each other, with one as master. When the FDs operate independently (each FCC driving its own side's command bars without cross-communication), both Master Annunciator (MA) lights illuminate to alert the crew that the two sides may show different guidance."
 },
 {
  "section": "Autoflight",
  "question": "What does an amber CWS P above the attitude indicator mean?",
  "answer": "Control wheel steering, pitch, is engaged.",
  "explanation": "CWS P appears in amber on the FMA to indicate the autopilot is in Control Wheel Steering for pitch. In this mode, the AP holds whatever pitch attitude the pilot sets with control pressure, rather than following a commanded mode like V/S or VNAV. Amber distinguishes it from normal green CMD modes."
 },
 {
  "section": "Autoflight",
  "question": "What does an amber CWS R above the attitude indicator mean?",
  "answer": "Control wheel steering, roll, is engaged",
  "explanation": "Similar to CWS P, CWS R means the autopilot is in Control Wheel Steering for roll. The pilot applies pressure to set a bank angle, and when released below 6 degrees bank, the AP rolls wings level and holds the heading. It's shown in amber because it's a fundamentally different mode from normal CMD roll modes."
 },
 {
  "section": "Autoflight",
  "question": "The three flight mode annunciator displays above the attitude indicator are ____.",
  "answer": "autothrottle, roll, pitch",
  "explanation": "The FMA at the top of the PFD is organized left to right as autothrottle mode, roll mode, then pitch mode. This layout lets you quickly scan what's controlling thrust, lateral path, and vertical path in one glance. Green means engaged, white means armed."
 },
 {
  "section": "Autoflight",
  "question": "A/P engagement is inhibited when ____.",
  "answer": "the Stab Trim Auto Pilot cutout switch is in cutout force is applied to the control wheel the A/P disengage bar is down any of the above occur",
  "explanation": "The autopilot needs certain prerequisites to engage. If the stab trim AP cutout is in CUTOUT, the AP can't control pitch trim. If force is on the control wheel, the AP would fight the pilot. If the disengage bar is down, that's a deliberate disconnect. Any of these conditions block engagement as a safety measure."
 },
 {
  "section": "Autoflight",
  "question": "Engaged flight modes are displayed in what color?",
  "answer": "green",
  "explanation": "The FMA uses a simple color code: green means a mode is actively engaged and controlling the airplane, white means a mode is armed and waiting to capture, and amber indicates CWS modes. This lets you instantly distinguish what's actually flying the airplane versus what's waiting in the wings."
 },
 {
  "section": "Autoflight",
  "question": "LNAV will automatically disconnect if ____.",
  "answer": "A:  the end of an active route is reached a route discontinuity is reached another roll mode is selected any of the above occurs",
  "explanation": "LNAV needs a valid lateral path from the FMC to follow. If the route ends or hits a discontinuity, there's nothing left to track, so LNAV drops out. Selecting another roll mode like HDG SEL obviously replaces LNAV. These are all logical boundary conditions for lateral FMC guidance."
 },
 {
  "section": "Autoflight",
  "question": "The crew is alerted to an altitude deviation when ____ feet from the selected MCP altitude.",
  "answer": "200",
  "explanation": "The 200-foot threshold is a standard altitude alerting value designed to catch deviations early. When you drift more than 200 feet from your selected MCP altitude, the system triggers both an aural alert and a visual amber flashing altitude box on the PFD to get your attention before the deviation becomes a bigger problem."
 },
 {
  "section": "Autoflight",
  "question": "The A/P status display is located ____.",
  "answer": "near the top of the PFD below the FMA",
  "explanation": "The autopilot status (CMD or CWS) is displayed just below the FMA on the PFD, keeping all automation status information grouped together at the top of the primary instrument. This placement makes it easy to scan the FMA and immediately see the AP engagement state."
 },
 {
  "section": "Autoflight",
  "question": "When TO/GA is engaged for takeoff, where are the pitch command bars positioned initially?",
  "answer": "10 degrees nose down",
  "explanation": "On the takeoff roll, the flight director bars start at 10 degrees nose down because the airplane is still on the ground accelerating. This keeps the bars visible and in a useful position during the ground roll. After rotation, the bars will transition upward to guide the proper climb pitch attitude."
 },
 {
  "section": "Autoflight",
  "question": "In LNAV, the AFDS intercepts and tracks the active FMC route if ____.",
  "answer": "A: on any heading and within 3 NM of the active route segment the outside 3 NM of the active route, the airplane on an intercept course of 90 degrees or less, and intercepting the route prior to the active waypoint criteria for either A or B above are met",
  "explanation": "LNAV has two engagement criteria depending on how far you are from the route. Within 3 NM, you can be on any heading and LNAV will capture. Beyond 3 NM, you need to be on an intercept course of 90 degrees or less and the intercept must happen before the active waypoint. This prevents LNAV from trying to make extreme turns or chasing a route segment that's already behind you."
 },
 {
  "section": "Autoflight",
  "question": "THR HLD on the Flight Mode Annunciator means ____.",
  "answer": "autothrottle servos are inhibited OR ALSO: the pilot can set the throttles manually",
  "explanation": "THR HLD means the autothrottle servos are frozen in place and won't move the thrust levers. This typically happens during the takeoff roll at 84 knots, allowing the pilot to manually adjust thrust if needed. The A/T system is still armed, but it's not actively driving the levers."
 },
 {
  "section": "Autoflight",
  "question": "What are the indications when deviating from a selected altitude by more than 200 feet?",
  "answer": "An aural alert sounds, and the current altitude box turns amber and begins to flash.",
  "explanation": "The system uses both aural and visual cues to catch your attention. The amber flashing altitude box on the PFD is hard to miss, and the accompanying tone ensures you notice even if you're head-down on something else. This dual alert design is a standard approach to make sure deviations don't go unnoticed."
 },
 {
  "section": "Autoflight",
  "question": "An altitude deviation will continue to warn the crew until _____.",
  "answer": "deviation is less than 200 feet, more than 900 feet, or a new altitude is selected",
  "explanation": "The alert clears when you're back within 200 feet of your target (problem fixed), when you're more than 900 feet away (you've clearly left the altitude intentionally or the system stops the repetitive alerting), or when a new altitude is selected on the MCP (acknowledging a new clearance)."
 },
 {
  "section": "Autoflight",
  "question": "The right FMC becomes the Primary FMC when ____.",
  "answer": "the FMC Source Select Switch is BOTH ON R OR ALSO: the left FMC fails",
  "explanation": "Normally the left FMC is the master, controlling the AFDS and A/T. If you manually select BOTH ON R with the source switch, or if the left FMC fails, the right FMC automatically takes over as master. This dual-FMC architecture provides redundancy so you don't lose FMS capability from a single failure."
 },
 {
  "section": "Autoflight",
  "question": "After TO/GA is selected on a go-around, the FD will command an initial pitch attitude of approximately _____ degrees.",
  "answer": "15",
  "explanation": "The 15-degree nose-up pitch command on a go-around is designed to provide a safe initial climb gradient with reduced go-around thrust. This is a two-engine go-around value that balances climb performance with a manageable pitch attitude."
 },
 {
  "section": "Autoflight",
  "question": "On a go-around after the first push of either TO/GA switch, the thrust levers advance to reduced go-around N1 to produce _____ fpm to _____ fpm rate of climb.",
  "answer": "1000, 2000",
  "explanation": "The first TO/GA push commands reduced go-around thrust, not full thrust, targeting a manageable 1000-2000 fpm climb. This is intentionally moderate to give the crew time to stabilize the aircraft and configure for the missed approach without excessive pitch or speed changes."
 },
 {
  "section": "Autoflight",
  "question": "On a single-engine go-around, a push of either TO/GA switch will command an initial pitch attitude of _____ degrees nose up.",
  "answer": "13",
  "explanation": "The single-engine go-around pitch command is 13 degrees, which is 2 degrees lower than the normal 15-degree command. With only one engine producing thrust, a lower pitch attitude prevents the airplane from decelerating too quickly while still achieving a positive climb rate."
 },
 {
  "section": "Autoflight",
  "question": "A boxed A/T LIM annunciation indicates that the FMC is not providing _____ limit values to the A/T system.",
  "answer": "N1",
  "explanation": "When you see the boxed A/T LIM on the FMA, it means the FMC has stopped sending N1 limit data to the autothrottle. Without these limits, the A/T doesn't know the maximum thrust it should command for the current phase of flight. This is an abnormal condition that needs crew attention."
 },
 {
  "section": "Autoflight",
  "question": "Altitude alerting is inhibited ____.",
  "answer": "while G/S is captured",
  "explanation": "Once you've captured the glideslope on an ILS approach, you're intentionally descending through whatever altitude is set on the MCP. Altitude alerting would just create nuisance warnings as you descend through that altitude, so the system intelligently inhibits it during glideslope tracking."
 },
 {
  "section": "Autoflight",
  "question": "If windshear is encountered on takeoff or go-around, the F/D pitch bar commands a pitch attitude with an initial target airspeed of _____ kts.",
  "answer": "V2 + 20",
  "explanation": "In a windshear encounter during takeoff or go-around, the flight director initially tries to maintain V2 + 20 knots, which provides a healthy speed margin. If conditions worsen and vertical speed drops to 600 fpm or less, the FD shifts to a fixed 15-degree pitch command, prioritizing terrain clearance over airspeed."
 },
 {
  "section": "Autoflight",
  "question": "If during a windshear encounter, the vertical speed decreases to 600 feet/min or less, an attitude of _____ degrees is commanded by the pitch command bars.",
  "answer": "15",
  "explanation": "When vertical speed drops to 600 fpm or less during a windshear encounter, the situation is critical. The FD commands a fixed 15-degree nose-up attitude to maximize vertical flight path, accepting that airspeed may decay. At this point, terrain clearance takes priority over maintaining speed, and the system may even command intermittent stick shaker."
 },
 {
  "section": "Autoflight",
  "question": "The AFDS/AT provides speed, pitch, and thrust commands to avoid exceeding which of the following speeds?",
  "answer": "VMO/MMO landing gear placard speeds wing flap placard speeds all of the above",
  "explanation": "The AFDS and autothrottle have built-in speed protection for all structural speed limits: VMO/MMO (max operating), gear placard, and flap placard speeds. This multi-layered protection prevents structural overspeed regardless of what configuration the airplane is in."
 },
 {
  "section": "Autoflight",
  "question": "If a speed selected on the MCP is greater than the maximum speed allowed, ____ appear(s) on the display?",
  "answer": "a flashing 8",
  "explanation": "A flashing 8 on the MCP speed display is the system's way of telling you the selected speed exceeds the current maximum limit (like VMO/MMO or a flap placard speed). Think of the 8 as representing the maximum possible digit display, signaling you've gone too high."
 },
 {
  "section": "Autoflight",
  "question": "If a speed selected on the MCP is lower than the minimum speed allowed by the AFDS and A/T, ____ appear(s) in the MCP speed display?",
  "answer": "a flashing A",
  "explanation": "A flashing A stands for 'Alpha' (angle of attack), warning that the selected speed is below the minimum safe speed. This ties into alpha floor speed protection logic. The A reminds you that going slower risks approaching the stick shaker/stall angle of attack."
 },
 {
  "section": "Autoflight",
  "question": "(MAX) When roll attitude exceeds ____ degrees of bank, the MAX Roll Command Alerting System (RCAS) a guidance cue is displayed on the PFD and HUD, indicating the correct upset roll recovery direction?",
  "answer": "45 - Regardless of actual autopilot engagement.",
  "explanation": "The RCAS is a MAX-specific safety feature that activates at 45 degrees of bank regardless of whether the autopilot is on or off. It provides a recovery guidance cue pointing the correct direction to roll wings level, which is critical in unusual attitude situations where spatial disorientation can cause pilots to roll the wrong way."
 },
 {
  "section": "Autoflight",
  "question": "After the Localizer and Glideslope capture, ____ will not work to get out of the approach mode.",
  "answer": "disengaging auto throttles",
  "explanation": "The autothrottle is independent from the AFDS lateral and vertical modes. Disconnecting the A/T only affects thrust control; it doesn't change the fact that the AFDS is tracking the localizer and glideslope. To exit APP mode, you need to affect the flight director or AP directly (TO/GA, retune nav, or turn off FDs and AP)."
 },
 {
  "section": "Autoflight",
  "question": "During a Go Around, pressing the TO/GA switch two times will ____.",
  "answer": "command auto-throttles to full go-around thrust",
  "explanation": "The first TO/GA press commands reduced go-around thrust (targeting 1000-2000 fpm climb). If you need more performance, the second press commands full go-around thrust. This two-step design gives crews a measured initial response with the option to get maximum thrust if needed."
 },
 {
  "section": "Autoflight",
  "question": "Pressing the APP Switch __. Select the most correct answer.",
  "answer": "illuminates the APP switch light arms the AFDS for LOC and GS capture arms the VOR/LOC and GS annunciators on the FMA does all of the above",
  "explanation": "The APP switch does multiple things simultaneously: it illuminates to confirm selection, arms both the localizer and glideslope for capture in the AFDS, and displays white armed annunciations on the FMA for VOR/LOC and G/S. This single button press sets up the entire ILS approach capture sequence."
 },
 {
  "section": "Autoflight",
  "question": "The Captain is flying the aircraft with Autopilot A engaged. To switch the autopilot from A to B _____.",
  "answer": "select Autopilot B",
  "explanation": "Switching autopilots is straightforward: just press the CMD B button. When you engage one AP, the other automatically disconnects since only one AP can be in CMD at a time (except during dual-AP ILS approaches). You don't need to disconnect A first."
 },
 {
  "section": "Autoflight",
  "question": "As you switch to the B Autopilot, what must be done to switch the Master FCC to the Right Side?",
  "answer": "Do nothing, it will switch when Autopilot B is selected.",
  "explanation": "The master FCC automatically follows the engaged autopilot. AP A uses FCC A as master, AP B uses FCC B as master. So when you switch from AP A to AP B, FCC B automatically becomes the master computer. No separate action is needed because the pairing is built into the system architecture."
 },
 {
  "section": "Autoflight",
  "question": "After switching from one Autopilot to the other, _______.",
  "answer": "the previous selected modes should remain engaged",
  "explanation": "The AFDS is designed so that switching between AP A and AP B is seamless. All your currently engaged modes (like LNAV, VNAV, ALT HOLD, etc.) carry over to the new autopilot. This prevents disruption to the flight path during what should be a transparent switchover."
 },
 {
  "section": "Autoflight",
  "question": "The ____ mode(s) is/are inhibited after glideslope capture in APP mode.",
  "answer": "V/S ALT HOLD LVL CHANGE All of the above",
  "explanation": "Once you've captured the glideslope, the system prevents you from accidentally selecting vertical modes that would take you off the glideslope path. V/S, ALT HOLD, and LVL CHG are all inhibited because any of them would immediately break the glideslope tracking, which could be dangerous during an approach."
 },
 {
  "section": "Autoflight",
  "question": "If a generator is lost during a F/D TO or GA, ____.",
  "answer": "the FCC on the unaffected side positions the FD command bars on both PFDs",
  "explanation": "Each FCC is powered by its respective side's electrical bus. If a generator fails, the FCC on that side loses power. The remaining FCC takes over and drives the flight director command bars on both PFDs, ensuring both pilots still get guidance during a critical phase of flight."
 },
 {
  "section": "Autoflight",
  "question": "On a go around after the first push of either TO/GA switch, the thrust levers advance to reduced go around N1 to produce __ fpm to __ fpm rate of climb.",
  "answer": "1000, 2000",
  "explanation": "This is the same principle as the earlier go-around question. The first TO/GA press gives reduced thrust targeting a moderate 1000-2000 fpm climb rate. This conservative initial response prevents excessive pitch attitudes and gives the crew time to stabilize before deciding if full go-around thrust is needed."
 },
 {
  "section": "Autoflight",
  "question": "During a go around, the roll command is _____.",
  "answer": "the existing ground track (FMA is blank) when TO/GA was engaged",
  "explanation": "When you press TO/GA for a go-around, the roll FMA goes blank because no lateral mode is initially commanded. The AFDS simply maintains the ground track you were on when TO/GA was pressed. This gives the crew time to decide on lateral guidance (like re-engaging LNAV or selecting a heading) without the airplane making unexpected turns."
 },
 {
  "section": "Autoflight",
  "question": "With the VNAV Mode selected, the auto throttle will ______.",
  "answer": "revert to FMS Speed Mode",
  "explanation": "When VNAV is engaged, the FMC takes over speed management and commands FMC SPD on the autothrottle. This makes sense because VNAV is an FMC-driven mode, so the FMC needs to control both the vertical path and the speed schedule to fly the optimized profile it has calculated."
 },
 {
  "section": "Autoflight",
  "question": "At cruise altitude, you've been cleared for descent. After resetting the altitude window on the MCP, you select a vertical speed of 1000 Ft/Min. What will control the Autothrottle?",
  "answer": "It will respond to MCP Speed.",
  "explanation": "When you select V/S mode instead of VNAV, you're using MCP-based vertical guidance rather than FMC-based. In V/S mode, the pitch holds the selected vertical speed while the autothrottle maintains the MCP-selected speed. This is different from VNAV, where the FMC controls speed."
 },
 {
  "section": "Autoflight",
  "question": "In this scenario, the _____ mode is controlling the Autothrottle.",
  "answer": "MCP Speed",
  "explanation": "In V/S mode, the autothrottle operates in MCP SPD mode. The pitch commands hold the selected vertical speed, and the A/T adjusts thrust to maintain whatever speed is dialed into the MCP speed window. This is the standard pairing: V/S controls pitch, MCP SPD controls thrust."
 },
 {
  "section": "Autoflight",
  "question": "With the display as shown, the Autopilot is operating in in the __ mode.",
  "answer": "CMD",
  "explanation": "CMD (Command) mode means the autopilot is actively flying the airplane and following all selected pitch and roll modes automatically. This is the normal autopilot engagement mode, as opposed to CWS where the pilot must apply pressure to maneuver."
 },
 {
  "section": "Autoflight",
  "question": "The pitch mode is being controlled by _______.",
  "answer": "ALT HOLD",
  "explanation": "ALT HOLD means the autopilot is maintaining the current barometric altitude. This mode engages either when the airplane levels off at the MCP-selected altitude or when the pilot presses the ALT HLD button to hold the present altitude. The AFDS uses pitch to hold the altitude reference."
 },
 {
  "section": "Autoflight",
  "question": "If the pilot now selects LNAV, how would this change the FMA?",
  "answer": "If less than 3NM but greater than 90 degrees intercept, the FMA will change to LNAV.",
  "explanation": "LNAV engagement depends on proximity and geometry relative to the route. Within 3 NM of the active route, LNAV will engage on any heading (even greater than 90 degrees intercept). The FMA roll mode would change from whatever it currently shows (likely HDG SEL) to LNAV in green, indicating the FMC is now controlling lateral navigation."
 },
 {
  "section": "Flight Instruments",
  "question": "How many independent pitot-static systems are there on the 737?",
  "answer": "3",
  "explanation": "The 737 has three independent pitot-static systems: one for the captain, one for the FO, and one standby. This triple redundancy ensures that even with two failures, at least one source of airspeed and altitude data remains available. Each feeds its respective instruments independently."
 },
 {
  "section": "Flight Instruments",
  "question": "The ____ provides inertial position and track data to the FMC.",
  "answer": "ADIRU",
  "explanation": "The ADIRU (Air Data Inertial Reference Unit) combines air data sensing with inertial reference. It provides the FMC with inertial position, ground track, heading, and other navigation data. The FMC then blends this with GPS, DME, and VOR data to determine the best position estimate."
 },
 {
  "section": "Flight Instruments",
  "question": "Failures of flight instrument systems are displayed on the _____ by failure flags.",
  "answer": "PFD and ND",
  "explanation": "When a data source fails (like airspeed, altitude, attitude, or heading), red failure flags appear directly on the PFD and ND where that data would normally be shown. This puts the failure indication right where you'd be looking for the information, so you can't miss that the data is invalid."
 },
 {
  "section": "Flight Instruments",
  "question": "The PLAN mode is presented _____. Select the most correct answer.",
  "answer": "true north up",
  "explanation": "PLN mode on the ND shows the full route from a top-down perspective oriented with true north at the top. Unlike MAP mode (which is track-up), PLN mode has no heading reference to the aircraft's current direction. This makes it useful for reviewing the entire route layout but not for real-time navigation."
 },
 {
  "section": "Flight Instruments",
  "question": "Maximum airspeed is displayed on the airspeed tape by a _____ bar.",
  "answer": "black and red",
  "explanation": "The VMO/MMO barber pole is shown as a distinctive black and red striped bar at the top of the usable speed range on the airspeed tape. This high-contrast pattern makes it immediately obvious where the maximum operating speed limit is, providing a clear visual boundary you should never reach."
 },
 {
  "section": "Flight Instruments",
  "question": "TCAS warning and avoidance annunciation, for an RA, is displayed on the _____.",
  "answer": "PFD and ND",
  "explanation": "A TCAS Resolution Advisory displays on both the PFD (showing vertical speed guidance with red and green arcs on the VSI) and the ND (showing the intruding traffic as a red square). Using both displays ensures the crew sees both the traffic threat and the avoidance guidance simultaneously."
 },
 {
  "section": "Flight Instruments",
  "question": "____ display(s) flight path angle and drift angle on the PFD. Select the most correct answer.",
  "answer": "The flight path vector (FPV)",
  "explanation": "The Flight Path Vector (also called the velocity vector) shows where the airplane is actually going through the air mass, displayed as a small aircraft symbol on the attitude indicator. Its vertical displacement from the horizon shows flight path angle, and its lateral offset from center shows drift angle due to crosswind."
 },
 {
  "section": "Flight Instruments",
  "question": "____ allow(s) the pilot to select the DU location of the PFD, ND, and engine instrument displays.",
  "answer": "The Display Select Panel",
  "explanation": "The Display Select Panel lets you rearrange which display unit shows which information. This is important for failure recovery: if a specific DU fails, you can move the PFD or ND to a different physical screen so you don't lose that information entirely."
 },
 {
  "section": "Flight Instruments",
  "question": "A black and red bar at the top of the airspeed indicator represents ____.",
  "answer": "a. VMO/MMO b. Flap Placard Speed c. Landing Gear Placard Speed d. all of the above speeds",
  "explanation": "The barber pole dynamically adjusts to show whatever speed limit currently applies. With clean configuration it shows VMO/MMO, but with flaps extended it drops to the flap placard speed, and with gear down it can show the gear placard speed. It always represents the most restrictive current maximum speed."
 },
 {
  "section": "Flight Instruments",
  "question": "The standby instruments contain ____ information.",
  "answer": "airspeed, altitude, and ILS magnetic heading and attitude backcourse ILS all of the above",
  "explanation": "The ISFD (Integrated Standby Flight Display) is a comprehensive backup instrument that provides airspeed, altitude, attitude, magnetic heading, and even ILS (localizer and glideslope) deviation. This means you can fly a full ILS approach using just the standby instruments if all primary displays fail."
 },
 {
  "section": "Flight Instruments",
  "question": "(MAX) What are some of the major differences of the new MAX Display System (MDS):",
  "answer": "Range selector can now be rotated continuously. OR ALSO: The heading display expanded to a 180 degree compass rose.",
  "explanation": "The MAX updated the display system with quality-of-life improvements. The continuously rotating range selector eliminates the detent stops of the NG, and the expanded 180-degree compass rose on the ND gives pilots better situational awareness of heading information compared to the NG's more compact display."
 },
 {
  "section": "Flight Instruments",
  "question": "On the ground prior to starting the second engine, the CDS Fault amber light is illuminated on the PFD. Which statement is true?",
  "answer": "A non-dispatchable fault has occurred.",
  "explanation": "The CDS (Common Display System) Fault light in amber indicates a system fault that prevents the airplane from being dispatched. This light is specifically designed to appear only on the ground before the second engine start, giving maintenance a chance to address the issue before departure."
 },
 {
  "section": "Flight Instruments",
  "question": "The CDS Fault light will only illuminate _____.",
  "answer": "on the ground prior to the second engine start",
  "explanation": "The CDS Fault light is intentionally limited to ground operation before the second engine start. This timing ensures the crew discovers any display system faults during the preflight/startup sequence when there's still time to address them, rather than surprising the crew in flight."
 },
 {
  "section": "Flight Instruments",
  "question": "If this light illuminates instead of the CDS Fault Light.",
  "answer": "a minor problem has occurred with the CDS, dispatch is permitted",
  "explanation": "This alternative light (the CDS advisory/status light) indicates a lesser CDS issue that doesn't prevent dispatch. The distinction between this and the CDS Fault light helps crews quickly determine whether a display system issue is a no-go item or something they can fly with, saving time at the gate."
 },
 {
  "section": "Flight Management Systems",
  "question": "The FMC receives inputs from many sources. Which of the following inputs are used?",
  "answer": "ADIRU and GPS VOR/DME and ILS receivers airplane systems All of the above",
  "explanation": "The FMC is an integration hub that pulls data from virtually every navigation sensor on the airplane. It uses ADIRU for inertial data, GPS for satellite position, VOR/DME for ground-based nav, ILS receivers for approach data, and airplane systems for things like fuel flow and weight. This multi-source approach allows it to cross-check and provide the most accurate navigation possible."
 },
 {
  "section": "Flight Management Systems",
  "question": "The FMCs are completely independent and do not transfer or compare information between each unit.",
  "answer": "False",
  "explanation": "The two FMCs do communicate and compare data with each other. While each independently calculates its own position, the master FMC shares its computed data with the standby, and they cross-check each other. This inter-communication is what allows seamless automatic switchover if the master fails."
 },
 {
  "section": "Flight Management Systems",
  "question": "When both FMCs are operating normally, each unit independently calculates its navigational position.",
  "answer": "True",
  "explanation": "Both FMCs run their own independent position calculations simultaneously, even though only the master is actually commanding the AFDS and A/T. This parallel computation means the standby FMC always has a current, valid position ready to take over instantly if the master fails, with no gap in navigation."
 },
 {
  "section": "Flight Management Systems",
  "question": "The two control display units (CDU) allow pilots to input data only to their respective FMCs if the RNP value exceeds the ANP value.",
  "answer": "False",
  "explanation": "This statement mixes two unrelated concepts. CDU-to-FMC data routing is determined by the FMC source select switch position (NORMAL, BOTH ON L, or BOTH ON R), not by RNP/ANP values. The RNP/ANP comparison is about navigation accuracy for procedures, not about CDU data entry routing."
 },
 {
  "section": "Flight Management Systems",
  "question": "With the loss of all navigational inputs to the FMC and GPS data is not available, how will it determine its position?",
  "answer": "IRS inputs only",
  "explanation": "The IRS is the fallback position source because it's self-contained and doesn't rely on external signals. Without GPS, VOR, or DME inputs, the FMC falls back to pure inertial navigation from the IRS. The downside is that IRS position drifts over time without radio updates, so accuracy degrades the longer you fly on IRS alone."
 },
 {
  "section": "Flight Management Systems",
  "question": "The FMCs select a combination of inputs from navigation receivers to determine the position estimate. Which input has the highest weighted priority?",
  "answer": "GPS",
  "explanation": "GPS gets the highest priority in the FMC's position blending algorithm because it provides the most accurate position data. The hierarchy goes GPS, then DME/DME, then VOR/DME, then IRS alone. The FMC always uses the best available source and blends lower-priority sources to cross-check and improve accuracy."
 },
 {
  "section": "Flight Management Systems",
  "question": "During a VNAV PATH descent, the FMC will calculate a descent path based on _____.",
  "answer": "altitude constraints, airspeed, and end of descent point",
  "explanation": "VNAV PATH builds a computed descent profile working backward from the end-of-descent point (typically the runway), incorporating any altitude constraints along the way (like STAR crossing restrictions) and the planned descent speed. The AFDS then uses pitch to track this computed path while the A/T typically sits at idle."
 },
 {
  "section": "Flight Management Systems",
  "question": "The DATA optional display switch on the Displays Control Panel will display on the map ____.",
  "answer": "Waypoint ETA and constraint altitude",
  "explanation": "The DATA switch on the EFIS control panel adds extra information alongside each waypoint on the ND map display. This shows the FMC-computed ETA at each waypoint and any altitude constraints programmed for that fix, giving you a quick visual reference of your planned vertical and time profile."
 },
 {
  "section": "Flight Management Systems",
  "question": "The IDENT page is accessed from the ____.",
  "answer": "INIT/REF page, INDEX page, IDENT prompt, or at ground power-up",
  "explanation": "The IDENT page shows aircraft and engine identification along with the navigation database information. It's available through multiple access paths because it's one of the first things you check during preflight to verify the correct nav database is loaded and current."
 },
 {
  "section": "Flight Management Systems",
  "question": "The selected approach reference speed will automatically update as aircraft weight changes.",
  "answer": "False",
  "explanation": "Once you select Vref on the APPROACH REF page, it becomes a fixed value and does not automatically adjust as fuel burns off and weight decreases. If you want an updated Vref based on current weight, you need to manually re-enter the gross weight on the page to get recalculated speeds."
 },
 {
  "section": "Flight Management Systems",
  "question": "On the approach/reference (APP/REF) page, current gross weight can be manually entered.",
  "answer": "True",
  "explanation": "You can manually enter the current gross weight on the APPROACH REF page to get updated Vref speeds. This is useful because the FMC's computed weight (based on initial entry minus calculated fuel burn) may not exactly match actual conditions, so manual entry lets you fine-tune the approach speeds."
 },
 {
  "section": "Flight Management Systems",
  "question": "In addition to the approach reference speed displayed on the APP/REF page, which additional information is displayed?",
  "answer": "Runway length in feet Approach freq, ident, and course both are correct",
  "explanation": "The APPROACH REF page is a one-stop reference for approach planning. Beyond Vref speeds, it shows runway length (for landing distance assessment) and the approach frequency, identifier, and course (for verifying you have the right approach set up). This consolidates key approach briefing information on one CDU page."
 },
 {
  "section": "Flight Management Systems",
  "question": "If the entered route does not form a continuous path of linked legs, a ____ will be displayed.",
  "answer": "Route discontinuity",
  "explanation": "A route discontinuity appears as a gap in the LEGS page when the FMC can't connect two consecutive legs into a continuous path. This commonly happens when inserting a STAR or approach that doesn't seamlessly connect to the preceding route segment. The crew must resolve discontinuities before LNAV can track through that point."
 },
 {
  "section": "Flight Management Systems",
  "question": "Thrust limits for takeoff, climb, cruise, and go-around must be selected manually.",
  "answer": "False",
  "explanation": "The FMC automatically selects the appropriate thrust limit for each phase of flight. It transitions from takeoff thrust to climb thrust at the thrust reduction altitude, then to cruise thrust at cruise altitude, and selects go-around thrust when TO/GA is pressed. You only need to manually intervene if you want something different from the default, like a derate."
 },
 {
  "section": "Flight Management Systems",
  "question": "The thrust reduction altitude, where automatic thrust reduction from takeoff to climb limit occurs, is fixed at 1000 feet AGL, and cannot be changed.",
  "answer": "False",
  "explanation": "While the default thrust reduction altitude is typically 1000 feet AGL, it can be changed on the TAKEOFF REF page in the CDU. Some airports or procedures may require a different reduction altitude, and the FMC allows you to adjust this to meet operational requirements."
 },
 {
  "section": "Flight Management Systems",
  "question": "The ENG OUT prompt displays single-engine climb speeds and maximum continuous N1.",
  "answer": "True",
  "explanation": "The ENG OUT feature on the N1 LIMIT page provides critical single-engine data: the optimal climb speed for one-engine performance and the max continuous N1 you can use on the remaining engine. This is pre-computed by the FMC based on current conditions, saving valuable time during an engine failure."
 },
 {
  "section": "Flight Management Systems",
  "question": "Waypoints beyond the active leg can be removed from the LEGS page by _____.",
  "answer": "pressing the DELETE key, then line select the waypoint to be removed moving a subsequent waypoint up in sequence and thus removing all intervening waypoints either are correct",
  "explanation": "There are two methods to remove waypoints from the route. You can use the DELETE key and then line-select the specific waypoint, or you can move a later waypoint up in the sequence, which removes everything in between. Both methods work, giving flexibility depending on whether you're removing one waypoint or clearing a whole section."
 },
 {
  "section": "Flight Management Systems",
  "question": "A holding pattern is constructed by entering the holding waypoint in the ____.",
  "answer": "HOLD AT box on LEGS page",
  "explanation": "To set up a hold in the FMC, you go to the LEGS page and enter the holding fix in the HOLD AT field. This opens the holding pattern page where you can specify the direction, inbound course, leg time or distance, and speed. The FMC then builds the hold into the active route."
 },
 {
  "section": "Flight Management Systems",
  "question": "To select a non-precision approach procedure that is contained in the database, the pilot selects the _____ page.",
  "answer": "DEP/ARR",
  "explanation": "All approach procedures, whether precision (ILS) or non-precision (VOR, RNAV, LOC), are accessed through the DEP/ARR page on the CDU. This single page serves as the gateway to all departure procedures (SIDs), arrival procedures (STARs), and approach procedures stored in the navigation database."
 },
 {
  "section": "Flight Management Systems",
  "question": "A VNAV SPD descent can automatically revert to a PATH descent during ____.",
  "answer": "a STAR, approach transition, or approach leg with a vertical angle",
  "explanation": "VNAV SPD controls speed with pitch while the A/T is at idle, but when the FMC encounters a leg that has a published vertical angle (like a STAR segment or an approach transition with a defined descent angle), it automatically switches to VNAV PTH to track that precise path. This ensures you meet the published vertical profile."
 },
 {
  "section": "Flight Management Systems",
  "question": "Initial position can be entered on the POS INIT page by which of the following?",
  "answer": "GPS position Reference airport, with or without specific gate Manually entered lat/long All of the above",
  "explanation": "The FMC offers multiple ways to initialize position because different situations call for different methods. GPS is the most accurate and convenient, airport/gate reference is quick and simple, and manual lat/long entry is the fallback if electronic methods aren't available. All three feed the same initialization function."
 },
 {
  "section": "Flight Management Systems",
  "question": "With only one FMC available, the system is capable of calculating data accurately.",
  "answer": "Yes",
  "explanation": "Each FMC is a fully capable, independent computer. While having two provides redundancy and cross-checking, a single FMC has all the processing power and sensor inputs needed to accurately calculate navigation, performance, and guidance data. You don't lose accuracy with one FMC; you lose redundancy."
 },
 {
  "section": "Flight Management Systems",
  "question": "With the FMC source select switch in NORMAL, the right CDU is controlled by the _____.",
  "answer": "left FMC",
  "explanation": "In the NORMAL position, the left FMC is the master and controls both CDUs. This means entries made on either CDU go to the same left FMC. The right FMC operates as standby, independently computing but not driving the displays. This is different from what you might expect, where each CDU would talk to its own side's FMC."
 },
 {
  "section": "Flight Management Systems",
  "question": "The PERF Performance Initialization (PERF INIT) page provides the means to enter aircraft weight, temperature, and wind parameters. What are the minimum parameters that must be input for the FMC to operate?",
  "answer": "All boxed prompts",
  "explanation": "Boxed prompts on CDU pages indicate mandatory entries. On the PERF INIT page, all boxed fields must be filled for the FMC to have enough data to compute a valid performance profile. If any boxed prompt is left empty, the FMC won't have the inputs it needs for proper VNAV and thrust calculations."
 },
 {
  "section": "Flight Management Systems",
  "question": "The alternate destinations page (ALT DEST) does not provide the pilot a quick reference for _____.",
  "answer": "lat/long of selected airport",
  "explanation": "The ALT DEST page provides practical alternate airport information like runway data, frequencies, and distances, but it does not display the lat/long coordinates of the airport. That geographic data would be available on other pages if needed, but the ALT DEST page focuses on operationally useful approach and landing information."
 },
 {
  "section": "Flight Management Systems",
  "question": "If the master (left) FMC fails, are LNAV and VNAV still available?",
  "answer": "Yes, after selecting FMC source selector to BOTH ON R.",
  "explanation": "When the left (master) FMC fails, the right FMC has been computing independently all along and is ready to take over. Moving the source selector to BOTH ON R makes the right FMC the master, restoring full LNAV and VNAV capability. This dual-FMC architecture is specifically designed for this seamless failover."
 },
 {
  "section": "Flight Management Systems",
  "question": "Which of the following is not used by the FMCs to determine position?",
  "answer": "ADF",
  "explanation": "The FMC uses GPS, DME/DME, VOR/DME, and IRS for position determination, but it does not use ADF (Automatic Direction Finder). ADF provides only a relative bearing to an NDB, which isn't accurate enough for the FMC's position computation algorithm. ADF is a standalone navigation tool, not integrated into the FMS position solution."
 },
 {
  "section": "Flight Management Systems",
  "question": "Will the FMC use a combination or a single source to determine its actual position?",
  "answer": "Combination",
  "explanation": "The FMC uses a weighted combination of all available navigation sources to determine its position, not just the single best source. It blends GPS, DME/DME, VOR/DME, and IRS data together, weighting each based on its accuracy and reliability. This blending approach produces a more accurate and robust position than any single source alone."
 },
 {
  "section": "Flight Management Systems",
  "question": "During a derated takeoff, a further reduction by an assumed temperature can be taken.",
  "answer": "Yes",
  "explanation": "Derate and assumed temperature are two separate thrust reduction methods that can be combined. A derate selects a lower-rated engine thrust level, and assumed temperature further reduces thrust within that derate by making the engine think it's hotter outside. Stacking both gives the maximum thrust reduction when runway length permits."
 },
 {
  "section": "Flight Management Systems",
  "question": "The STA switch on the Displays Control Panel will display all ____ on the nav display.",
  "answer": "high and low altitude NAVAIDs if the range is selected to 40 miles or less",
  "explanation": "The STA (Station) switch on the EFIS control panel overlays NAVAID symbols on the ND map display. The 40-mile range limit prevents clutter: at larger ranges, displaying all NAVAIDs would make the display unreadable. At 40 NM or less, you're close enough that the nearby stations are operationally relevant."
 },
 {
  "section": "Flight Management Systems",
  "question": "When multiple waypoints or NAVAIDs with the same identifier are in the database, the FMC will automatically display all waypoints.",
  "answer": "True",
  "explanation": "When you enter a waypoint identifier that exists in multiple locations in the database, the FMC presents all matches so you can select the correct one. This prevents the system from guessing wrong, which could result in routing to the wrong geographic location with the same five-letter name."
 },
 {
  "section": "Flight Management Systems",
  "question": "Which page is used to display SIDs and STARs?",
  "answer": "ARR/DEP",
  "explanation": "The DEP/ARR page (accessed via the DEP ARR key on the CDU) is the central page for selecting departure procedures (SIDs), arrival procedures (STARs), and approaches. It organizes all published procedures by airport and runway, making it straightforward to build the terminal portions of your route."
 },
 {
  "section": "Flight Management Systems",
  "question": "When the final load closeout is received, the pilot must check that the _____ has been entered on the PERF page for FMC calculation.",
  "answer": "ZFW",
  "explanation": "Zero Fuel Weight is critical because the FMC uses it as the basis for all performance calculations. When the final load closeout comes in via ACARS, the ZFW gets uplinked, and the pilot must verify it's correctly entered on the PERF INIT page. An incorrect ZFW would cause errors in speed schedules, fuel predictions, and V-speeds."
 },
 {
  "section": "Flight Management Systems",
  "question": "Lateral navigation will engage when (1) you are laterally within ___ nautical miles of the active route leg, and (2) you are outside of ____ miles if on an intercept heading of less than ___ degrees, and the intercept will occur prior to the fix.",
  "answer": "3, 3, 90",
  "explanation": "These are the LNAV engagement criteria: within 3 NM on any heading, or outside 3 NM if your intercept angle is 90 degrees or less and you'll reach the route before the next waypoint. The 3 NM and 90-degree limits prevent LNAV from engaging in situations where it can't make a reasonable intercept, which would cause erratic flight path behavior."
 },
 {
  "section": "Flight Management Systems",
  "question": "When a STAR is selected for an airport, the transition is also automatically selected.",
  "answer": "False",
  "explanation": "Selecting a STAR does not automatically select the transition that connects it to the en route portion of your flight. The transition must be manually selected as a separate step because there are typically multiple possible transitions into a STAR depending on your direction of arrival, and the FMC can't know which one ATC will assign."
 },
 {
  "section": "HUD",
  "question": "The HUD is activated by ____.",
  "answer": "unstowing the combiner",
  "explanation": "The HUD combiner is the transparent glass panel that folds down in front of the pilot's eyes. Simply unstowing (deploying) the combiner activates the HUD system and begins projecting symbology onto the glass. When stowed, the HUD is essentially off."
 },
 {
  "section": "HUD",
  "question": "If operational, the HUD ____.",
  "answer": "must be used for all takeoffs and all approaches and landings to assist in tailstrike prevention must be used for low visibility takeoffs and low visibility approaches in the Lower Minimums Program combiner must be deployed and the intensity adjusted for ambient conditions in the mandatory regimes must be used per all of the above",
  "explanation": "AA requires HUD use in multiple scenarios: routine takeoffs and landings (especially for tailstrike prevention during rotation and flare), low-visibility operations under the Lower Minimums Program, and the combiner must be properly deployed and brightness-adjusted whenever it's mandatory. It's not just a low-vis tool; it's used for everyday operations."
 },
 {
  "section": "HUD",
  "question": "The HUD computer is programmed/controlled for each event ____.",
  "answer": "on the CDU HUD menu",
  "explanation": "HUD mode configuration is done through the CDU's HUD menu page, not through switches on the HUD itself. This keeps the HUD hardware simple (just the combiner and projector) while the FMC-connected CDU handles the mode selection and configuration logic for different phases of flight."
 },
 {
  "section": "HUD",
  "question": "In addition to normal flight and navigation guidance, the HUD can also provide all of the following EXCEPT for ______.",
  "answer": "RNP and ANP values",
  "explanation": "The HUD displays flight path vector, runway outline, airspeed, altitude, radio altitude, approach minimums, and flight director guidance, but RNP and ANP values are only shown on the CDU. The HUD focuses on flight path and guidance information that pilots need while looking outside, and navigation accuracy monitoring is a head-down task."
 },
 {
  "section": "HUD",
  "question": "If the HUD combiner screen moves to the breakaway position, ____.",
  "answer": "the combiner symbology is blanked",
  "explanation": "The breakaway position is a safety feature where the combiner can be pushed out of the pilot's line of sight if needed. When the combiner reaches this position, the projected symbology automatically blanks to prevent confusing partial projections. The pilot then looks through clear glass to fly visually."
 },
 {
  "section": "HUD",
  "question": "An illuminated AIII light on the HUD Annunciator Panel indicates AIII mode is ____.",
  "answer": "active",
  "explanation": "The AIII (Autoland Category III) light on the HUD Annunciator Panel (HAP) illuminates when AIII mode is actively engaged and operational. This confirms to the crew that the HUD is providing CAT III guidance, which is essential for the lowest visibility autoland operations."
 },
 {
  "section": "HUD",
  "question": "When the HUD NO AIII light is illuminated on the HAP, ____.",
  "answer": "conditions have been detected which prevent AIII mode from being continued",
  "explanation": "The NO AIII light is a warning that something has failed or degraded that prevents CAT III operations from continuing. This could be a sensor failure, an autopilot issue, or other condition. When this light comes on during an approach, the crew must transition to higher minimums since CAT III capability is lost."
 },
 {
  "section": "HUD",
  "question": "When the HUD Combiner NORM/MAN switch is set to NORM, combiner screen brightness is adjusted ____.",
  "answer": "by the position of the DIM Control and the amount of light sensed by the ambient light sensor",
  "explanation": "In NORM mode, the HUD uses both the pilot's manual DIM control setting and an ambient light sensor to automatically adjust brightness. This dual-input approach ensures the symbology is bright enough to see in daylight but dims appropriately at night, without the pilot constantly adjusting the brightness knob."
 },
 {
  "section": "HUD",
  "question": "For routine operations, the HUD must be used on takeoff until at least ____.",
  "answer": "Final Climb Segment (clean configuration)",
  "explanation": "AA requires keeping the HUD active from takeoff through the final climb segment (when the airplane reaches clean configuration with flaps and slats retracted). This covers the entire departure phase including rotation (where it helps prevent tailstrikes) and initial climb, which are the highest-workload phases."
 },
 {
  "section": "HUD",
  "question": "The HUD AIII mode must be selected up to approximately 7 seconds prior to reaching ____ feet AGL.",
  "answer": "500",
  "explanation": "AIII mode needs to be selected before 500 feet AGL to give the system enough time to run its integrity checks and confirm all conditions are met for a CAT III approach. The 7-second lead time ensures the HUD is fully in AIII mode and verified before entering the critical low-altitude segment of the approach."
 },
 {
  "section": "HUD",
  "question": "On approach, the HUD must be used no later than ____.",
  "answer": "1000 feet AFL",
  "explanation": "AA requires the HUD combiner to be deployed and in use by 1000 feet above field level on approach. This ensures the pilot has the HUD guidance cues established well before reaching decision height or minimums, giving adequate time to transition between head-down instruments and the HUD's head-up presentation."
 },
 {
  "section": "HUD",
  "question": "Use of the HUD with an inoperative number 1 radio altimeter is prohibited.",
  "answer": "True",
  "explanation": "The HUD relies heavily on radio altimeter data for its approach guidance symbology, including the flare cue, runway outline positioning, and altitude callouts. The number 1 radio altimeter feeds the captain's HUD, so without it, the HUD can't provide accurate low-altitude guidance, making its use unsafe and prohibited."
 },
 {
  "section": "HUD",
  "question": "(MAX) The naming convention for the HGS modes has changed. Which of the following modes will be annunciated on the HUD when selected?",
  "answer": "VMC, IMC, AIII",
  "explanation": "The MAX uses the HGS-4000/6000 system with updated mode names compared to the NG's BAE2020. The NG used NP/AI/AII/AIII designations, while the MAX simplified to VMC (visual conditions), IMC (instrument conditions), and AIII (CAT III autoland). The names are more intuitive and describe the operating environment rather than approach category."
 },
 {
  "section": "HUD",
  "question": "(MAX) Which of the following is correct regarding the Aircraft Braking Scale and Pointer?",
  "answer": "If the current braking level is not sufficient to stop the aircraft in the remaining runway, the pointer will deflect to a position at the top end of the scale in the warning area and flash.",
  "explanation": "The MAX HUD includes a braking scale that shows real-time stopping performance during landing rollout. If the system calculates that current braking won't stop the airplane within the remaining runway, the pointer moves to the warning zone at the top of the scale and flashes. This gives the pilot immediate visual feedback to increase braking effort or take other action."
 },
 {
  "section": "Flight Warning System",
  "question": "Immediate attention warning lights are _____.",
  "answer": "red",
  "explanation": "Red sits at the top of the alert hierarchy because it demands immediate crew action. Think fire warnings, unsafe gear, and autopilot disconnects \u2014 situations where seconds matter. The color coding is intuitive: red = stop everything and deal with this now."
 },
 {
  "section": "Flight Warning System",
  "question": "Red warning lights may indicate ____.",
  "answer": "engine, wheel well, and APU fires A/P, A/T disconnects landing gear unsafe conditions all of the above",
  "explanation": "Red warnings cover the most critical situations on the airplane \u2014 fires anywhere (engine, APU, wheel well), autopilot/autothrottle disconnects that need immediate pilot flying input, and unsafe landing gear conditions. All of these require the crew to act right away, hence the highest priority color."
 },
 {
  "section": "Flight Warning System",
  "question": "Informational alerts such as electrical power availability, valve position, equipment status, and flight attendant or ground communications are indicated by lights that are _____ in color.",
  "answer": "blue",
  "explanation": "Blue lights are purely informational \u2014 they tell you about system status without requiring any corrective action. Things like valve positions, power availability, and interphone calls are good to know but don't represent a problem. Blue sits below amber (caution) in priority because it's just awareness information."
 },
 {
  "section": "Flight Warning System",
  "question": "Some lights have a bright blue and a dim blue setting. The bright blue indicates a valve _____ and the dim blue indicates a valve _____.",
  "answer": "moving to its selected position/in the selected position",
  "explanation": "This is a clever design feature. When you command a valve to move, the bright blue tells you it's still in transit or hasn't reached the commanded position yet. Once it arrives and agrees with the switch position, it dims down. So bright blue is essentially saying 'hang on, still moving' while dim blue means 'all good, valve is where you told it to be.'"
 },
 {
  "section": "Flight Warning System",
  "question": "Green lights indicate an extended configuration of ____.",
  "answer": "both landing gear and leading edge devices",
  "explanation": "Green lights are configuration indicators \u2014 they confirm things are extended and in position. Landing gear green means down and locked; LE device green means extended. These are the 'good to go' lights that confirm the airplane is configured the way you want it for the current phase of flight."
 },
 {
  "section": "Flight Warning System",
  "question": "The GPWS Inoperative (INOP) Light illuminates amber for ____.",
  "answer": "a GPWS malfunction a power loss invalid inputs all of the above",
  "explanation": "The GPWS INOP light is amber because losing ground proximity protection is a caution-level concern \u2014 you need to be aware you've lost a critical safety net, but it doesn't demand immediate emergency action. Any condition that renders the GPWS unable to function (hardware failure, power loss, or bad sensor inputs) will trigger this light."
 },
 {
  "section": "Flight Warning System",
  "question": "Generally, aural warnings will silence ____.",
  "answer": "automatically when the associated non-normal condition no longer exists",
  "explanation": "Most aural warnings are designed to be self-canceling \u2014 once you fix the problem, the noise stops. This makes sense because the warning's job is to get your attention about a condition; once the condition is resolved, there's no reason to keep alerting. The notable exception is the overspeed clacker, which only silences when you slow down."
 },
 {
  "section": "Flight Warning System",
  "question": "The Proximity Switch Electronic Unit (PSEU) monitors ____.",
  "answer": "takeoff and landing configuration warnings air/ground sensing landing gear All of the above",
  "explanation": "The PSEU is a central monitoring computer that watches over configuration-critical systems. It tracks whether the airplane is on the ground or in the air, checks that the gear and flaps are properly configured for takeoff and landing, and generates warnings when something is wrong. It's essentially the brain behind the configuration warning system."
 },
 {
  "section": "Flight Warning System",
  "question": "Two independent Mach/airspeed warning systems sound a clacker when maximum speed is exceeded. The clacker will only be silenced when ____.",
  "answer": "airspeed is reduced below VMO/MMO",
  "explanation": "There is no cutout switch for the overspeed clacker \u2014 the only way to silence it is to slow down. This is intentional: exceeding VMO/MMO risks structural damage, so Boeing doesn't want pilots to be able to ignore the warning. The dual-system redundancy ensures you'll hear it even if one system fails."
 },
 {
  "section": "Flight Warning System",
  "question": "The PSEU light is inhibited ____.",
  "answer": "in flight",
  "explanation": "The PSEU light only illuminates on the ground because it monitors ground-related configuration and sensor functions. In flight, PSEU faults would be distracting and not actionable, so the light is inhibited. On the MAX, the PSEU has been replaced by the MAINT light concept."
 },
 {
  "section": "Flight Warning System",
  "question": "The stick shakers are designed to alert the pilots ____.",
  "answer": "just before a stall develops",
  "explanation": "The stick shakers are a tactile warning \u2014 you literally feel the vibration through both control columns (they're interconnected). They activate just before the stall so you have time to take corrective action and reduce angle of attack. The SMYD computers calculate the approach to stall using AOA vanes, airspeed, configuration, and other data."
 },
 {
  "section": "Flight Warning System",
  "question": "On the fire test panel, we can test for ____.",
  "answer": "APU, engines, and wheel well fire engine overheat operational fire bottle squibs all of the above",
  "explanation": "The fire test panel provides comprehensive testing of the entire fire and overheat detection/suppression system. You can verify detection loops for engines, APU, and wheel well, check the overheat sensors, and confirm the squibs (initiators) on the fire bottles are functional \u2014 all from one test panel. This ensures the whole system is operational before each flight."
 },
 {
  "section": "Flight Warning System",
  "question": "____ will activate the takeoff warning system.",
  "answer": "SPEED BRAKE lever is not in the DOWN position",
  "explanation": "Taking off with speed brakes deployed would severely degrade takeoff performance and could be catastrophic. The takeoff warning system checks several critical items \u2014 flaps, LE devices, stab trim, parking brake, and speed brakes \u2014 when thrust is advanced. If the speed brake lever isn't in the DOWN detent, you'll get the intermittent horn and TAKEOFF CONFIG warning."
 },
 {
  "section": "Flight Warning System",
  "question": "The flaps are set at 10 degrees, the landing gear is up, and you are above 800 feet RA. Which of the following statements is true about the landing gear horn?",
  "answer": "The horn will not sound.",
  "explanation": "The landing gear warning logic has specific trigger conditions. At flaps 10 (which is in the UP through 10 range), the gear horn only activates below 800 feet RA with thrust at or near idle. Since you're above 800 feet RA, none of the triggering conditions are met, so the horn stays silent."
 },
 {
  "section": "Flight Warning System",
  "question": "A momentary altitude alert tone will activate ____.",
  "answer": "approaching 900 feet of the altitude selected on the mode control panel",
  "explanation": "The altitude alert system gives you a heads-up when you're 900 feet from your selected altitude. At that point you get a momentary tone, a white box around the selected altitude, and a bold current altitude box. This is the 'get ready' alert \u2014 the airplane is about to reach the altitude you dialed into the MCP."
 },
 {
  "section": "Flight Warning System",
  "question": "A flashing amber box around the current altitude signifies ____.",
  "answer": "an altitude deviation of 200 feet or more",
  "explanation": "If you deviate 200 feet or more from your selected MCP altitude, the current altitude box turns amber and flashes, accompanied by a momentary tone. This is the system telling you 'you're busting your altitude.' The flashing continues until you're back within 200 feet, exceed 900 feet deviation, or select a new altitude."
 },
 {
  "section": "Flight Warning System",
  "question": "Maximum engine limits are displayed in ____.",
  "answer": "red",
  "explanation": "Red on the engine instruments indicates maximum limits that must not be exceeded. This is consistent with the overall warning philosophy: red means immediate attention required. Exceeding engine red-line limits risks engine damage or failure."
 },
 {
  "section": "Flight Warning System",
  "question": "A start valve failed to close on engine start. Which of the following will alert the crew?",
  "answer": "Blinking start valve open alert for 10 seconds",
  "explanation": "After engine start, the start valve should close once the engine reaches approximately 56% N2. If it fails to close, the START VALVE OPEN light blinks for 10 seconds to grab your attention. A stuck-open start valve means high-pressure bleed air is still flowing to the starter, which could overheat it."
 },
 {
  "section": "Flight Warning System",
  "question": "Some minor cautions or faults do not illuminate the MASTER CAUTION lights or system annunciator lights but are stored and presented later during ____.",
  "answer": "RECALL",
  "explanation": "The RECALL function (pressing the system annunciator panel) reveals 'simple faults' \u2014 single failures in redundant systems that don't need immediate attention. Boeing designed it this way so minor issues don't constantly distract the crew with master caution lights, but the information is still available when you check for it during normal flows."
 },
 {
  "section": "Flight Warning System",
  "question": "The landing gear configuration warning horn will activate at any altitude and cannot be silenced if a gear is not down and locked with the flaps set to ____ degrees with one or both throttles set to idle.",
  "answer": "15",
  "explanation": "At flaps 15 or greater, the airplane is clearly in a landing configuration, and the gear horn cannot be silenced with the cutout switch. The cutout switch only works with flaps UP through 10 (and only above 200 feet RA). Boeing's logic: if you have flaps at 15 or more, you're landing, and you absolutely need the gear down."
 },
 {
  "section": "Flight Warning System",
  "question": "Pushing the fire warning (FIRE WARN) lights or BELL CUTOUT for an engine fire ____.",
  "answer": "extinguishes both FIRE WARN lights silences the Fire Warning Bell resets the system for additional warnings accomplishes all of the above",
  "explanation": "Pressing either FIRE WARN light (or the bell cutout) does three things: silences the bell so you can think clearly, extinguishes both glareshield lights, and critically resets the system so it can alert you to any new fire warnings. The fire switch light on the panel stays illuminated until the fire condition clears."
 },
 {
  "section": "Flight Warning System",
  "question": "Pushing a MASTER CAUTION light after it illuminates ____.",
  "answer": "resets the system for additional master caution conditions",
  "explanation": "When you push the MASTER CAUTION light, it extinguishes both the master caution and the system annunciator light, and resets the system to detect new cautions. This is important \u2014 if you don't reset it, a second caution condition won't get your attention because the light is already on."
 },
 {
  "section": "Flight Warning System",
  "question": "An illuminated amber light on the System Annunciator Panel is on because of a malfunction outside of the primary viewing area of the pilots. To extinguish it, ____.",
  "answer": "push either MASTER CAUTION light",
  "explanation": "The system annunciator 'six-pack' panels alert you that something on the overhead or fire panel needs attention \u2014 areas outside your normal scan. Pressing either master caution light extinguishes both the master caution and the annunciator light. The actual caution light on the overhead panel remains lit until the condition is resolved."
 },
 {
  "section": "Flight Warning System",
  "question": "The Landing Gear Warning Cutout Switch silences the landing gear configuration warning at flaps UP through ____ degrees.",
  "answer": "10",
  "explanation": "The gear warning cutout switch only works at lower flap settings (UP through 10) because these settings are commonly used in non-landing scenarios like maneuvering or holding. At flaps 15 and above, you're clearly configuring to land, so Boeing doesn't let you silence the warning \u2014 the gear must be down."
 },
 {
  "section": "Flight Warning System",
  "question": "The System Annunciator Light Panels monitor system indications located on ____.",
  "answer": "the Overhead and Fire Control panels",
  "explanation": "The system annunciator panels serve as a 'bridge' between the overhead/fire panels (which are above and behind your normal scan) and the glareshield where you're looking. When a caution appears on the overhead, the corresponding annunciator panel lights up to get your attention without requiring you to constantly scan overhead."
 },
 {
  "section": "Flight Warning System",
  "question": "The _____ annunciator panel monitors the following systems: flight controls, IRS, fuel, electrical, APU, and overheat/detection.",
  "answer": "left",
  "explanation": "The left six-pack monitors: FLT CONT, ELEC, IRS, APU, FUEL, and OVHT/DET. A helpful way to remember the split is that the left panel handles more of the 'core airplane systems' \u2014 flight controls, inertial reference, electrical power, engines/APU, fuel, and fire detection."
 },
 {
  "section": "Flight Warning System",
  "question": "The _____ annunciator panel monitors the following systems: anti-ice, hydraulics, doors, engines, overhead panel, and air conditioning.",
  "answer": "right",
  "explanation": "The right six-pack monitors: ANTI-ICE, ENG, HYD, OVERHEAD, DOORS, and AIR COND. The right panel covers environmental and mechanical systems \u2014 ice protection, engine indications, hydraulics, door status, air conditioning, and a general overhead catch-all."
 },
 {
  "section": "Flight Warning System",
  "question": "The takeoff configuration intermittent warning can be cancelled only ____.",
  "answer": "when the configuration is corrected",
  "explanation": "There is no way to silence the takeoff configuration warning other than fixing the problem. This is a deliberate safety feature \u2014 Boeing doesn't want crews taking off with an incorrect configuration. If you hear the intermittent horn and see the TAKEOFF CONFIG light, you must find and correct the misconfiguration before advancing thrust."
 },
 {
  "section": "Flight Warning System",
  "question": "Landing gear light indications are ____.",
  "answer": "green light - gear is down and locked Red light - gear is in disagreement with lever position, gear is not down and locked (below 800 ft RA and a thrust lever at idle.) extinguished - gear up and locked all of the above",
  "explanation": "The three-state gear light system gives you complete status: green means safely down and locked, red means something is wrong (in transit, disagreement, or unsafe condition near the ground), and dark means up and locked. The red light logic below 800 feet RA with idle thrust is designed to catch a gear-up landing scenario."
 },
 {
  "section": "Flight Warning System",
  "question": "A valve that is not in its selected position will show up as a (an) _____ light.",
  "answer": "bright blue",
  "explanation": "Bright blue means a valve is either in transit or disagrees with its commanded position. This is the system's way of saying 'the valve hasn't reached where you told it to go yet.' Once the valve arrives at the commanded position, the light dims to indicate normal operation."
 },
 {
  "section": "Flight Warning System",
  "question": "Warnings and information about the nature of a situation are provided by _____ signals.",
  "answer": "visual, aural, and tactile",
  "explanation": "Boeing uses all three sensory channels to alert the crew: visual (lights and displays), aural (horns, bells, clackers, voice warnings), and tactile (stick shaker vibration). Using multiple channels ensures the crew will notice critical warnings even if they're focused on one particular task or sense."
 },
 {
  "section": "Flight Warning System",
  "question": "The MASTER CAUTION Lights will remain illuminated ____.",
  "answer": "until reset or as long as the caution condition exists",
  "explanation": "The master caution light stays on until you actively push it to reset. If the underlying condition still exists after reset, the system annunciator light may re-illuminate on the next occurrence. This design ensures the crew acknowledges each caution event."
 },
 {
  "section": "Flight Warning System",
  "question": "Single faults in certain redundant systems or some simple faults do not illuminate the MASTER CAUTION or the System Annunciator Light until _____.",
  "answer": "recall of the system",
  "explanation": "These are called 'simple faults' \u2014 failures in redundant systems where the backup is still working fine. Boeing doesn't want to distract you with a master caution for a non-critical redundancy loss, but the information is stored and shows up when you press the annunciator panel for RECALL during your normal flows."
 },
 {
  "section": "Flight Warning System",
  "question": "When performing the Before Taxi/Taxi checklist, the PSEU light illumination on recall indicates _____.",
  "answer": "a simple fault exists in the PSEU system",
  "explanation": "If the PSEU light only appears on RECALL (and didn't trigger a master caution on its own), it means there's a minor, simple fault in the PSEU system. The PSEU is still functional overall, but one of its monitoring channels may have a degraded condition. This is a maintenance item, not an immediate safety concern."
 },
 {
  "section": "Flight Warning System",
  "question": "The red gear indicator light will be illuminated for ____.",
  "answer": "landing gear in transit",
  "explanation": "When the gear is moving between up-locked and down-locked positions, the red light tells you it's 'unsafe' \u2014 not fully in either position. This is normal during gear cycling. The light also illuminates if there's a genuine disagreement between the lever position and gear position."
 },
 {
  "section": "Flight Warning System",
  "question": "The Mach/airspeed warning will sound the clacker anytime _____ is exceeded.",
  "answer": "VMO/MMO",
  "explanation": "The clacker specifically monitors VMO (maximum operating speed) and MMO (maximum operating Mach number). Two independent systems ensure redundancy. Unlike most other aural warnings, the clacker has no cutout switch \u2014 slowing down is the only solution, because exceeding these limits risks structural damage."
 },
 {
  "section": "Flight Warning System",
  "question": "The SMYD computers receive input from _____.",
  "answer": "a. anti-ice controls b. ADIRUs c. FMCs d. all of the above",
  "explanation": "The SMYD (Stall Management Yaw Damper) computers need comprehensive data to accurately predict the stall point. They use AOA from the ADIRUs, wing configuration status, anti-ice settings (which affect stall characteristics), and FMC data. Anti-ice status is important because icing conditions change the stall speed."
 },
 {
  "section": "Flight Warning System",
  "question": "How can you silence the Mach/airspeed warning horn?",
  "answer": "Slow the airplane below MMO or VMO.",
  "explanation": "There is no cutout switch for the overspeed clacker \u2014 period. Boeing intentionally made this warning impossible to silence by any means other than reducing speed. The rationale is that flying faster than VMO/MMO risks structural failure, and no pilot should ever want to ignore that warning."
 },
 {
  "section": "Flight Warning System",
  "question": "Deviations from the altitude selected on the mode control panel will cause a ____.",
  "answer": "momentary altitude horn at 200 feet off altitude and an amber flashing box around the current altitude",
  "explanation": "The 200-foot deviation alert is your 'you're busting altitude' warning. The momentary tone grabs your attention, and the flashing amber box on the PFD keeps reminding you until you correct back within 200 feet, deviate more than 900 feet (at which point you presumably know about it), or select a new altitude."
 },
 {
  "section": "Flight Warning System",
  "question": "Normal engine indications on the upper engine display are ____ in color.",
  "answer": "white",
  "explanation": "White is the baseline color for normal engine parameters. This makes deviations immediately obvious \u2014 if something turns amber or red on the engine display, it stands out against the white background of normal operations. The color scheme is consistent across the entire warning philosophy."
 },
 {
  "section": "Flight Warning System",
  "question": "Upon engine shutdown on the ground at the end of the flight, an inflight exceedance will be ____.",
  "answer": "shown by a red box",
  "explanation": "The red box is the engine display's way of flagging that a parameter exceeded its limit during the flight. It appears at shutdown so the crew can document it in the logbook for maintenance. This is important because inflight exceedances may require engine inspection before the next flight."
 },
 {
  "section": "Flight Warning System",
  "question": "Amber annunciator lights alert the flight crew of conditions which ____.",
  "answer": "require timely attention",
  "explanation": "Amber is the second tier of the alert hierarchy \u2014 below red (immediate action) but above blue (informational). Amber cautions mean something is wrong and you need to deal with it, but you have a little time to assess and respond. Think of it as 'important but not right-this-second.'"
 },
 {
  "section": "Flight Warning System",
  "question": "The stall warning stick shaker consists of ____.",
  "answer": "two separate motors, one on each control column",
  "explanation": "There are two independent eccentric weight motors, one mounted on each control column. Even though both columns vibrate (because they're mechanically interconnected), having two separate motors provides redundancy. Each motor is driven by its respective SMYD computer, so a single failure won't eliminate the stall warning."
 },
 {
  "section": "Flight Warning System",
  "question": "When illuminated on the HAP, the green AlII light means _____.",
  "answer": "AlII mode is active",
  "explanation": "The green AIII light on the HUD Annunciator Panel (HAP) confirms that Autoland Category III mode is active and the system is healthy. Green means 'go' \u2014 all the conditions for a Cat III approach are met and the system is operating normally."
 },
 {
  "section": "Flight Warning System",
  "question": "During an AlII approach, this light is illuminated below 1,000 feet. You should _____.",
  "answer": "execute a missed approach",
  "explanation": "If the AIII system shows a fault or NO AIII indication below 1,000 feet during a Cat III approach, you've lost the autoland capability you need for that approach. Since you're already configured for a low-visibility approach that requires the AIII system, losing it below 1,000 feet means you must go around."
 },
 {
  "section": "Flight Warning System",
  "question": "When the NO AIII light is illuminated on the HAP, AlII _____.",
  "answer": "operations are not permitted",
  "explanation": "The NO AIII light means the system has detected a condition that prevents safe Category III operations. This could be a sensor failure, computer disagreement, or other integrity issue. You cannot conduct a Cat III approach \u2014 you'll need to either fly a higher-minimum approach or divert to better weather."
 },
 {
  "section": "GPWS",
  "question": "TCAS traffic is displayed on the ND when TFC is selected on the EFIS Control Panel and operations are conducted in ____ mode(s).",
  "answer": "the expanded App the expanded MAP or center MAP the expanded VOR all of the above",
  "explanation": "TCAS traffic can be shown in all the expanded display modes (APP, MAP, VOR) and center MAP mode because these modes have enough geographic context to meaningfully display traffic position relative to your airplane. The PLAN mode and full VOR/APP rose modes don't support traffic display because they're oriented differently."
 },
 {
  "section": "GPWS",
  "question": "On aircraft prior to 3DM, look ahead terrain GPWS alerting ____.",
  "answer": "provides alerts and displays of terrain relative to airplane altitude is inhibited by an actual windshear warning (airplane in windshear) does not account for man-made obstructions in 3AA through 3DL aircraft All the above",
  "explanation": "The EGPWS look-ahead feature uses a terrain database and GPS position to predict terrain conflicts 40-60 seconds ahead. However, it has known limitations: man-made obstructions (towers, buildings) are NOT in the database on older aircraft, and the system is inhibited during actual windshear because windshear escape takes priority over terrain avoidance."
 },
 {
  "section": "GPWS",
  "question": "Look ahead terrain alerts are based on ____.",
  "answer": "the airplane`s GPS position barometric altitude, ground speed, and vertical flight path terrain information stored in the database All the above",
  "explanation": "The EGPWS look-ahead function combines your current GPS position and flight trajectory with a stored terrain database to predict whether you'll hit terrain. It uses barometric altitude (not radio altitude) because it needs to project your path forward, and ground speed and vertical flight path determine where you'll be in 20-60 seconds."
 },
 {
  "section": "GPWS",
  "question": "Predictive windshear is active automatically ____.",
  "answer": "when throttles are set for takeoff",
  "explanation": "Predictive windshear uses the weather radar to detect microburst signatures ahead of the airplane. It activates automatically when takeoff thrust is set because windshear is most dangerous during takeoff and approach \u2014 low altitude, low energy phases of flight. It also operates during approach below 1,200 feet AGL."
 },
 {
  "section": "GPWS",
  "question": "The predictive windshear symbol will appear in ____ mode(s).",
  "answer": "MAP, Expanded VOR, or APP",
  "explanation": "The predictive windshear symbol only shows on ND modes that display geographic/map information ahead of the airplane. MAP, expanded VOR, and APP modes all show the area in front of you where the windshear symbol can be meaningfully displayed. Other modes like PLAN or full rose wouldn't give useful spatial context."
 },
 {
  "section": "GPWS",
  "question": "If windshear is predicted within 1.5 NM, ____.",
  "answer": "the red word WINDSHEAR appears on both PFD/ND the red visual windshear symbol appears on the ND (mode permitting) An aural voice alert is heard. All the above",
  "explanation": "A windshear detection within 1.5 NM triggers a multi-sensory red-level alert \u2014 visual on both PFD and ND plus an aural voice warning. Red is used because windshear at low altitude is immediately life-threatening, and 1.5 NM at approach speeds gives you very little time to react."
 },
 {
  "section": "GPWS",
  "question": "Upon actual entry into windshear, ____.",
  "answer": "predictive windshear alerts are inhibited by an actual windshear warning",
  "explanation": "Once you're actually in the windshear, the reactive windshear system takes over and the predictive alerts are suppressed. This prevents alert confusion \u2014 you don't need a prediction about something you're already experiencing. The flight directors will provide windshear escape guidance at this point."
 },
 {
  "section": "GPWS",
  "question": "Use of the terrain display is allowable for navigation.",
  "answer": "False",
  "explanation": "The EGPWS terrain display is strictly for situational awareness about terrain threats \u2014 it must never be used as a navigation tool. The terrain database may not be current, doesn't include all obstructions, and the display resolution isn't precise enough for navigation. Always use proper navigation sources for positioning."
 },
 {
  "section": "Communications",
  "question": "Which PA system announcements will override all others?",
  "answer": "Flight deck announcements",
  "explanation": "The PA priority hierarchy puts the captain at the top, then the FO, then flight attendants, then boarding music. This ensures that in an emergency, the captain's commands are heard throughout the cabin regardless of what other announcements are playing. The FO's PA also overrides flight attendant and pre-recorded announcements."
 },
 {
  "section": "Communications",
  "question": "How is the cockpit voice recorder tape manually erased?",
  "answer": "Hold the ERASE button for 2 seconds with the airplane on the ground and the brake set.",
  "explanation": "The CVR erase function requires the airplane to be on the ground with brakes set as a safety measure \u2014 you don't want accidental erasure in flight or during taxi. The 2-second hold prevents inadvertent activation. The CVR continuously records and overwrites the oldest data, but the erase function lets you clear it intentionally."
 },
 {
  "section": "Communications",
  "question": "The Radio Tuning Panel offside tuning light (white) indicates ____.",
  "answer": "the Captain is tuning VHF #2 from his/her panel OR ALSO: the First Officer is tuning VHF #1 from his/her panel",
  "explanation": "Normally, VHF-1 is tuned from the captain's RTP and VHF-2 from the FO's RTP. The white offside tuning light warns you when someone is tuning the other pilot's 'normal' radio \u2014 this prevents confusion about who changed what frequency. It's a crew coordination feature."
 },
 {
  "section": "Communications",
  "question": "Placing the service interphone switch to the ON position ____.",
  "answer": "adds all external jacks to the service interphone system",
  "explanation": "The service interphone connects the flight deck to ground crew through external jacks, typically near the nose wheel well. Switching it ON activates all the external jack connections so ground personnel can communicate with the cockpit during pushback, maintenance, and servicing operations."
 },
 {
  "section": "Communications",
  "question": "Volume controls for the overhead speakers on the audio control panel ____.",
  "answer": "cannot control the volume of audio warnings",
  "explanation": "Audio warnings (like the fire bell, gear horn, overspeed clacker) are hardwired at a fixed volume that cannot be reduced. This is a safety feature \u2014 you should never be able to turn down a critical warning so low that you miss it. Only non-warning audio (radio reception, nav ident tones) responds to volume controls."
 },
 {
  "section": "Communications",
  "question": "With the Captains audio system degraded, which statement is correct?",
  "answer": "Audio warnings cannot be heard through the Captains audio control panel or overhead speaker.",
  "explanation": "When the captain's audio system is degraded, both the panel output and the associated overhead speaker lose audio warning capability. The FO's system would still function normally, but the captain would need to rely on visual cues for warnings. This is why understanding audio system degradation is important for crew coordination."
 },
 {
  "section": "Communications",
  "question": "How will you know if the Radio Tuning Panel has failed?",
  "answer": "PANEL FAIL will be displayed in the active and standby windows.",
  "explanation": "The RTP has a self-test feature that displays 'PANEL FAIL' across both the active and standby frequency windows when it detects an internal failure. This is unambiguous \u2014 the whole display area is taken over by the failure message so you can't miss it. You'd need to use the other pilot's RTP or backup tuning methods."
 },
 {
  "section": "ACARS",
  "question": "The engine takeoff report is sent approximately 30 seconds after takeoff. If the PACK/BLEED configurations are set to inadvertently cause a CABIN ALTITUDE warning if left unchanged, after how long and how will the crew receive an alert?",
  "answer": "2 minutes; SELCAL chime and NON-STANDARD BLEEDS/PACKS message is printed",
  "explanation": "ACARS automatically monitors the engine takeoff report data and compares pack/bleed configuration against expected settings. If the configuration could cause a cabin altitude problem, dispatch/operations sends an alert back to the airplane via ACARS within 2 minutes. The SELCAL chime ensures the crew notices the incoming message even if they're busy with climb duties."
 },
 {
  "section": "ACARS",
  "question": "What should be entered in the flap setting when trying to get FOS search for a TPS using standard thrust?",
  "answer": "Leave blank or put \u201899\u2019 to allow search for standard thrust if possible",
  "explanation": "The Flight Operations System (FOS) uses blank or '99' as a signal to search for a standard (non-derated) thrust takeoff performance solution. Leaving the flap field blank tells the system to optimize across all flap settings, while '99' is a specific code that triggers the standard thrust search logic."
 },
 {
  "section": "ACARS",
  "question": "The initial load closeout will be sent to the ACARS printer. The only data uplinked to the FMS is ___?",
  "answer": "ZFW and takeoff CG.",
  "explanation": "While the full load closeout prints on the ACARS printer for crew review, only the Zero Fuel Weight and takeoff CG are digitally uplinked to the FMS. The FMS needs these two values to calculate accurate performance data \u2014 V-speeds, fuel predictions, and thrust settings. Other load data is for crew verification only."
 },
 {
  "section": "ACARS",
  "question": "To obtain a TPS via ACARS, what is the minimum input information required for a TPS request?",
  "answer": "Only runway is required. FOS will optimize for any fields left blank.",
  "explanation": "The FOS system is designed to be flexible \u2014 if you only give it a runway, it will use actual conditions (winds, temperature, pressure) to optimize the remaining variables like flap setting and thrust rating. This is useful when you're in a hurry or conditions are changing, though providing more data gives you more tailored results."
 },
 {
  "section": "ACARS",
  "question": "Automatic reporting of OUT time is generated by ____.",
  "answer": "doors closed and brakes OFF",
  "explanation": "The OOOI reporting system (Out, Off, On, In) uses specific physical events to mark each time. The 'Out' time is triggered when doors close AND parking brakes are released \u2014 this combination indicates the airplane is ready to push/taxi. It's fully automatic so the crew doesn't need to manually report movement times."
 },
 {
  "section": "ATC/TCAS",
  "question": "TCAS altitude and vertical motion are included with the symbol if the other airplane`s transponder mode is using ____.",
  "answer": "Mode S or Mode C",
  "explanation": "TCAS needs altitude data from the other aircraft to provide vertical traffic information. Mode C and Mode S transponders both report altitude \u2014 Mode C via a simple pressure altitude encoding, and Mode S via a more sophisticated data link. Mode A only provides a squawk code with no altitude, so you'd only see bearing and range."
 },
 {
  "section": "ATC/TCAS",
  "question": "When the RA encounter is terminated and the guidance is no longer required, the TCAS system will issue the aural advisory \"____.\"",
  "answer": "Clear of Conflict",
  "explanation": "The 'Clear of Conflict' aural advisory tells you the RA event is over and you can return to your ATC-assigned altitude or clearance. This is important because during an RA, you're deviating from your assigned altitude \u2014 you need to know when it's safe to return to normal operations and coordinate with ATC."
 },
 {
  "section": "ATC/TCAS",
  "question": "Which of the following traffic displays is NOT a function of TCAS?",
  "answer": "Identification Signal",
  "explanation": "TCAS can show traffic position, altitude, vertical trend, and threat level (TA/RA symbology), but it cannot display the other aircraft's identification (callsign or squawk code). TCAS is purely a collision avoidance system based on range and altitude data \u2014 aircraft identification is an ATC function."
 },
 {
  "section": "ATC/TCAS",
  "question": "A TA is indicated by an aural _____ and the traffic annunciation appears on the ____.",
  "answer": "Traffic Traffic\"\"/Navigation Display",
  "explanation": "A Traffic Advisory (TA) occurs about 40 seconds from closest approach. You hear 'TRAFFIC, TRAFFIC' once, and the intruder appears as a yellow diamond on the ND. The TA is an awareness alert \u2014 look for the traffic and be ready, but no maneuver is required yet."
 },
 {
  "section": "ATC/TCAS",
  "question": "An RA is indicated by an aural alert for corrective action and a ____.",
  "answer": "red square",
  "explanation": "A Resolution Advisory (RA) is the highest TCAS alert \u2014 about 25 seconds from closest approach. The intruder appears as a red square on the ND, and you get specific aural climb/descend commands with pitch guidance on the PFD. Red means 'act now' \u2014 follow the RA guidance immediately, even if it conflicts with ATC instructions."
 },
 {
  "section": "ATC/TCAS",
  "question": "If the selected range on the NAV display does not permit the display of a TA or RA, what annunciation appears on the NAV display?",
  "answer": "OFF SCALE",
  "explanation": "If TCAS detects a TA or RA but the traffic is beyond the range you've selected on the ND, 'OFF SCALE' appears so you know there's a threat you can't see on the display. This prompts you to increase your ND range to see the traffic. It's a safeguard against having your range set too tight and missing nearby threats."
 },
 {
  "section": "Navigation",
  "question": "The IRS display unit is located on the ____.",
  "answer": "Aft Overhead Panel",
  "explanation": "The IRS display unit sits on the aft overhead panel along with other system monitoring displays that don't need constant crew attention. You use it during preflight for alignment monitoring and in-flight for troubleshooting IRS faults, but it's not part of your primary instrument scan."
 },
 {
  "section": "Navigation",
  "question": "How long does a full IRS alignment take?",
  "answer": "From 5-17 minutes depending on latitude.",
  "explanation": "IRS alignment uses the Earth's rotation rate to establish a reference frame, and this process is affected by latitude. Near the equator (maximum Earth rotation component) alignment is faster (~5 minutes), while at higher latitudes (near the poles) it takes longer because the rotation rate component decreases. Typical alignment at mid-latitudes is about 10 minutes."
 },
 {
  "section": "Navigation",
  "question": "A steady white ALIGN light on the IRS Display Unit means ____.",
  "answer": "Alignment is progressing normally",
  "explanation": "A steady ALIGN light is the normal indication during the alignment process. The IRS is sensing the Earth's rotation and gravity to establish its reference frame. Just leave it alone and don't move the airplane \u2014 the process will complete and the light will extinguish when alignment is finished and you can select NAV mode."
 },
 {
  "section": "Navigation",
  "question": "A flashing white ALIGN light means ____.",
  "answer": "no present position entered OR ALSO: unreasonable present position entry",
  "explanation": "The IRS needs to know where it is to start the alignment process properly. A flashing ALIGN light is the IRS saying 'I need a valid position to work with.' Either no position has been entered, or the entered position doesn't match what the IRS is sensing (perhaps entered incorrectly). On MAX aircraft with GPS-inertial systems, this is handled automatically."
 },
 {
  "section": "Navigation",
  "question": "How long can the Right IRS operate without AC electrical power?",
  "answer": "5 minutes",
  "explanation": "The right IRS has a 5-minute DC power backup via the switched hot battery bus. After that, it shuts down if AC power isn't restored. This limited backup gives you some time to restore power (start APU, etc.) before losing the right IRS entirely. The left IRS has its own backup power path as well."
 },
 {
  "section": "Navigation",
  "question": "If the amber FAULT light illuminates on the IRS Display Unit, it indicates the ____.",
  "answer": "Related IRS system has detected a fault",
  "explanation": "An amber FAULT light means that particular IRS unit has self-detected an internal problem and its data may be unreliable. The IRS continuously monitors itself, and when it detects errors beyond tolerance, it flags the fault. You may need to switch to ATT mode or rely on the remaining IRS units depending on the situation."
 },
 {
  "section": "Navigation",
  "question": "The VOR course is set on the ____.",
  "answer": "Mode Control Panel",
  "explanation": "VOR course is set using the course knob on the MCP (or EFIS control panel, depending on the context). This sets the desired course for VOR tracking, which is then displayed on the ND compass rose. The MCP is the central interface for all lateral and vertical mode selections."
 },
 {
  "section": "Navigation",
  "question": "The VOR identification is displayed on the ____.",
  "answer": "Navigation Display",
  "explanation": "The VOR station identifier (three-letter code) appears on the ND so you can verify you're tuned to the correct station. This is important for positive station identification \u2014 you should always confirm the displayed ID matches what you expect for your route or approach."
 },
 {
  "section": "Navigation",
  "question": "The right VOR information can be displayed and flown on the left ND by changing the ____.",
  "answer": "VHF NAV Transfer Switch on the FWD Overhead Panel",
  "explanation": "The VHF NAV transfer switch allows you to swap which VHF NAV receiver feeds which side's instruments. Normally, NAV 1 feeds the captain's instruments and NAV 2 feeds the FO's. If NAV 1 fails, you can transfer NAV 2 to the captain's side using this switch, maintaining full navigation capability."
 },
 {
  "section": "Navigation",
  "question": "DME frequencies are normally _____ tuned by the _____ as necessary for aircraft position updating.",
  "answer": "Automatically/FMC",
  "explanation": "The FMC automatically tunes DME stations to triangulate position using DME/DME updating. It selects the best combination of DME stations for geometric accuracy without any crew input. This is more accurate than VOR/DME positioning and provides continuous position updates to supplement GPS and IRS data."
 },
 {
  "section": "Navigation",
  "question": "____ ILS receiver(s) is/are installed on the B737.",
  "answer": "2",
  "explanation": "Two ILS receivers provide redundancy for the most critical phase of flight \u2014 the approach. NAV receiver 1 feeds the captain's side and NAV receiver 2 feeds the FO's side. For Cat II/III approaches, both receivers are used and cross-checked to ensure landing guidance integrity."
 },
 {
  "section": "Navigation",
  "question": "ILS course and glidepath are displayed on the pilots PFDs and ____.",
  "answer": "Standby Attitude Indicator",
  "explanation": "ILS data is displayed on both PFDs and the standby attitude indicator for redundancy. If both PFDs fail, the standby instrument still shows localizer and glideslope deviation, giving you a backup for flying the ILS approach. This is a critical backup capability for the worst-case display failure scenario."
 },
 {
  "section": "Navigation",
  "question": "Marker beacon information is displayed on ____.",
  "answer": "The PFD only",
  "explanation": "Marker beacon information (outer, middle, inner marker) shows only on the PFD because it's approach-specific information that the pilot flying needs during the approach. The marker lights (blue, amber, white) appear on the PFD along with the associated audio tone through the selected audio panel."
 },
 {
  "section": "Navigation",
  "question": "____ GPS receivers are installed in the B737.",
  "answer": "2",
  "explanation": "Two GPS receivers (left and right) provide redundancy and allow cross-checking for integrity. GPS is the most accurate position source available to the FMC and is the primary position input when available and valid. Having two receivers means a single GPS failure doesn't degrade navigation accuracy."
 },
 {
  "section": "Navigation",
  "question": "GPS provides position updates to the ____ and other aircraft systems.",
  "answer": "FMC",
  "explanation": "GPS position data flows primarily to the FMC, which uses it as the highest-priority position source for blending with IRS, DME/DME, and VOR/DME inputs. The FMC then distributes the computed best position to other systems that need it, like the EGPWS terrain database and the ND map display."
 },
 {
  "section": "Navigation",
  "question": "The white ALIGN light will flash to indicate ____.",
  "answer": "An error in initial position information",
  "explanation": "The flashing ALIGN light is the IRS telling you the entered position doesn't make sense \u2014 either nothing was entered or the position is unreasonable (perhaps a typo put you in the wrong hemisphere). The IRS needs accurate initial position to align properly, so it won't proceed until the position is corrected."
 },
 {
  "section": "Navigation",
  "question": "In flight, attitude information may be restored following a fault by selecting ____.",
  "answer": "ATT",
  "explanation": "ATT (Attitude) mode is the last-resort IRS mode. It provides only attitude and heading information \u2014 no position, groundspeed, track, or wind data. When you select ATT after a fault, the IRS resets its attitude reference using accelerometers, which is why you need to maintain wings level and constant airspeed for about 30 seconds during the transition."
 },
 {
  "section": "Navigation",
  "question": "In flight, the Master Caution Lights and the IRS Annunciation light illuminate. The indications to the right also occur which means that the _____.",
  "answer": "DC power source for the left IRS is not normal but the left IRS is still powered by the AC Standby",
  "explanation": "The ON DC light means the IRS has lost its normal AC power source and has switched to DC backup power from the switched hot battery bus. The IRS is still functioning, but DC power is limited \u2014 the left IRS gets AC standby bus power through the static inverter, which is a sustainable backup as long as the battery holds."
 },
 {
  "section": "Navigation",
  "question": "Assuming no other IRS lights are illuminated, normal IRS operation can be restored by ____.",
  "answer": "None of the above. The IRS is operating normally",
  "explanation": "If the ON DC light illuminated but then AC power was restored (no other fault lights), the IRS may have automatically reverted to normal AC power. With no FAULT or ALIGN lights illuminated, the IRS is functioning normally. The ON DC condition was temporary and self-resolved when AC power returned."
 },
 {
  "section": "Navigation",
  "question": "What is the back-up DC power source for the Left IRS?",
  "answer": "The Switched Hot Battery Bus",
  "explanation": "The switched hot battery bus provides DC backup power to the left IRS when normal AC power is lost. This bus is powered directly from the aircraft battery through a switch, ensuring the left IRS stays alive even during a major electrical failure. It's called 'switched hot' because it's always available when the battery switch is ON."
 },
 {
  "section": "Navigation",
  "question": "For aircraft 3RH-3VM, the IRS initialization procedure requires the pilot to:",
  "answer": "Do nothing. The system has a hybrid GPS \u2013 inertial system and automatically enters the present position.",
  "explanation": "The newer MAX aircraft (3RH-3VM) have a hybrid GPS-inertial system that automatically acquires GPS position for IRS initialization. No manual position entry is needed. This is a significant improvement over the NG, where pilots had to manually verify or enter position on the CDU POS INIT page."
 },
 {
  "section": "Navigation",
  "question": "While still at the gate you confirm that external power is connected. What additional conclusion can be made based on the indications shown?",
  "answer": "AC power to the number 1 IRS has failed.",
  "explanation": "If you're on external power but seeing IRS power anomaly indications, it means the AC power path specifically to the #1 IRS has failed even though the airplane has external power. This could be a breaker, a bus issue, or a wiring problem between the power source and the IRS unit."
 },
 {
  "section": "Navigation",
  "question": "When an aircraft is parked at the gate, when else might you see this indication?",
  "answer": "This is a normal momentary indication during an IRS alignment self- test.",
  "explanation": "During IRS power-up and initial self-test, the system briefly cycles through various states that can momentarily illuminate warning lights. A brief ON DC or FAULT indication during the self-test sequence at the gate is normal and should clear within seconds. If it persists, then there's a real problem."
 },
 {
  "section": "Navigation",
  "question": "What should you conclude from these indications while the aircraft is at the gate?",
  "answer": "The left IRS is being powered by the Switched Hot Battery Bus.",
  "explanation": "The ON DC light at the gate means the left IRS has lost its normal AC power source and has switched to DC backup from the switched hot battery bus. This is not normal at the gate with power connected \u2014 it indicates an AC power distribution problem that needs to be resolved before dispatch."
 },
 {
  "section": "Navigation",
  "question": "For aircraft 3RH-3VM, inflight loss of alignment due to power interruption or inadvertent shutdown requires the pilot to:",
  "answer": "Do nothing. When power is restored, attitude reference information is restored after approximately 30 seconds due to AIM (Align in Motion).",
  "explanation": "The MAX's Align in Motion (AIM) feature is a major improvement \u2014 the hybrid GPS-inertial system can realign in flight using GPS data in about 30 seconds, without requiring the aircraft to be stationary. On the NG, an inflight IRS shutdown means you lose that IRS permanently for the rest of the flight (no inflight realignment possible)."
 },
 {
  "section": "Navigation",
  "question": "How long can you expect Standby Power to last following a loss of both generators?",
  "answer": "A minimum of 30 min",
  "explanation": "A fully charged battery provides at least 30 minutes of standby power. This is your emergency electrical endurance \u2014 enough time to start the APU, divert to the nearest suitable airport, or troubleshoot the electrical problem. Time management becomes critical because once the battery is depleted, you lose standby instruments and communications."
 },
 {
  "section": "Navigation",
  "question": "30 seconds after placing the #1 IRS Mode Selector to ATT the FAULT Light extinguishes. Mag compass heading is 127. To enter and regain current aircraft heading the crew should enter ______.",
  "answer": "127 degrees in Line 5R (SET IRS HDG) of POS INIT Page 1 of the CDU",
  "explanation": "In ATT mode, the IRS loses its heading reference and needs a magnetic heading input to re-establish it. You read the magnetic compass (127 degrees in this case), then enter it on the CDU POS INIT page at the SET IRS HDG line select key. This gives the IRS a starting heading to work from, though it will drift over time and need periodic updates."
 },
 {
  "section": "Navigation",
  "question": "The right (IRS #2) ON DC light has illuminated. What is a possible cause?",
  "answer": "The right IRS is being powered by the switched hot battery bus.",
  "explanation": "The ON DC light for the right IRS means it has lost normal AC power and switched to DC backup from the switched hot battery bus. Remember, the right IRS only has 5 minutes of DC backup power before it shuts down, so restoring AC power quickly is critical \u2014 you may need to start the APU or troubleshoot the electrical system."
 },
 {
  "section": "Navigation",
  "question": "This indication occurs at the gate because external power dropped off line and the aircraft is now on standby power. Select all of the indications (below) that would also be applicable.",
  "answer": "The Master Caution and IRS annunciator lights illuminate The ground call horn in the nose wheel well sounds. The BAT DISCHARGE light illuminates TRANSFER BUS OFF and SOURCE OFF lights illuminate. All the ABOVE",
  "explanation": "When external power drops off, the airplane loses its AC power source. Everything cascades: transfer buses lose power (SOURCE OFF, TRANSFER BUS OFF lights), the battery kicks in (BAT DISCHARGE), standby power takes over, the ground crew hears the horn, and master caution/IRS annunciator illuminate because the IRS power path has changed. It's a full electrical event."
 },
 {
  "section": "Navigation",
  "question": "In this situation, the indication occurs in flight. Assuming no corrective action is available, which statement about the operation of each IRS is correct?",
  "answer": "The left IRS is operating normally. The right IRS will shut down in 5 minutes.",
  "explanation": "The right IRS on DC backup only has 5 minutes before it shuts down \u2014 this is a hard time limit based on battery capacity allocated to the right IRS. The left IRS has a more robust backup power path through the AC standby bus (powered by the static inverter from the battery), so it continues operating normally."
 },
 {
  "section": "Navigation",
  "question": "This indication is observed in level flight. The left IRS Transfer Switch is in the NORMAL position. In this situation, the Left IRS is not providing accurate _____.",
  "answer": "Attitude and heading information to the Captain's instruments. To restore attitude information, select ATT on the #1 IRS Mode Selector and maintain wings level and constant airspeed tor 30 seconds",
  "explanation": "When the left IRS has a fault affecting attitude and heading, the captain's PFD will display unreliable flight information. Selecting ATT mode forces the IRS to re-initialize its attitude reference using the accelerometers. The 30-second wings-level/constant-speed requirement gives the system stable conditions to establish a new reference."
 },
 {
  "section": "Navigation",
  "question": "The QRH directs you to place the #1 IRS Mode Selector to ATT. Once in this mode, the left IRS does not calculate ______. Select the most correct answer.",
  "answer": "Acceleration, vertical speed, ground speed, track, position, heading, and winds",
  "explanation": "ATT mode is the bare minimum \u2014 it only provides attitude (pitch and roll). Everything else the IRS normally calculates is gone: no position, no groundspeed, no track, no winds, no heading, no vertical speed. You lose LNAV capability and must navigate by other means. This is why ATT mode is truly a last resort."
 },
 {
  "section": "Navigation",
  "question": "To continue operations with the IRS Mode Selector Unit in this configuration, you must",
  "answer": "Monitor aircraft heading using a different source and periodically enter corrected heading in the CDU POS INIT Page or by selecting HDG/STS on the IRS Display Unit.",
  "explanation": "Since ATT mode doesn't provide heading, you need an alternative heading source \u2014 the magnetic compass or the other IRS. The heading drifts in ATT mode, so you must periodically update it manually on the CDU or IRS display. This is workload-intensive but keeps the captain's instruments usable for basic flying."
 },
 {
  "section": "Navigation",
  "question": "With the indications in flight on the left IRS panel, you should place the #1 IRS Mode Selector to ___.",
  "answer": "ATT while maintaining wings level and constant airspeed for approximately 30 seconds and leave the IRS in ATT mode",
  "explanation": "When the left IRS faults in flight, ATT mode is the recovery option. The 30-second stabilized flight gives the accelerometers time to sense gravity accurately and re-establish the attitude reference. You must leave it in ATT mode \u2014 selecting back to NAV won't work because the full navigation alignment is lost and can't be recovered in flight (on the NG)."
 },
 {
  "section": "Navigation",
  "question": "In this scenario, which statement below most accurately describes flight limitations with the aircraft in this configuration?",
  "answer": "Cat II and/or Cat III approaches are not authorized.",
  "explanation": "Cat II/III approaches require full redundancy of navigation systems including all IRS units in NAV mode. With one IRS in ATT mode (or failed), you've lost the required level of system integrity for low-visibility approaches. You're limited to Cat I or non-precision approaches, which may require diverting if weather is below Cat I minimums."
 },
 {
  "section": "Weather Radar",
  "question": "In the WX/T (turbulence) mode, a turbulence display is available on displays of ____ nm or less.",
  "answer": "40",
  "explanation": "Turbulence detection requires higher radar resolution, which is only available at shorter ranges. Beyond 40 NM, the radar beam spreads too much to reliably detect turbulence signatures. Within 40 NM, the radar can detect variations in the Doppler shift of returned signals that indicate turbulent air motion."
 },
 {
  "section": "Weather Radar",
  "question": "The weather radar GAIN Control sets gain in the ____ modes.",
  "answer": "Both MAP and WX/WX/T",
  "explanation": "The GAIN control adjusts radar sensitivity in both MAP mode (which overlays weather on a ground map) and WX/WX+T mode (dedicated weather display). Adjusting gain lets you calibrate the display \u2014 you can reduce gain to see which weather returns persist (indicating dangerous intensity) or increase it for better detection of lighter precipitation."
 },
 {
  "section": "Weather Radar",
  "question": "The weather radar system is capable of detecting and issuing windshear events (predictive windshear) ____. Select the most correct answer.",
  "answer": "below 1200 feet AGL within 3 NM of the aircraft before the aircraft enters the area of windshear in all of the above locations",
  "explanation": "Predictive windshear uses the weather radar to detect microburst signatures ahead of the airplane. It operates below 1,200 feet AGL (the danger zone for windshear) and can detect events up to 3 NM ahead. The key word is 'predictive' \u2014 it warns you before you fly into the windshear, giving you time to go around or delay takeoff."
 },
 {
  "section": "Weather Radar",
  "question": "The strongest weather radar reflectivity echoes are produced by ____.",
  "answer": "Wet hail",
  "explanation": "Wet hail produces the strongest radar returns because large, water-coated ice stones are extremely effective at reflecting radar energy. The combination of size (large targets) and wetness (water is a strong radar reflector) makes wet hail show up as the most intense returns. This is why the strongest cells on radar should always be avoided."
 },
 {
  "section": "Weather Radar",
  "question": "The yellow level of precipitation indicates ____.",
  "answer": "Medium reflectivity/moderate rainfall",
  "explanation": "The weather radar uses a color scale: green (light), yellow (moderate), red (heavy), and magenta (turbulence). Yellow/moderate rainfall means you should expect moderate turbulence and should consider deviating. It's not immediately dangerous like red, but it's worth monitoring and planning around."
 },
 {
  "section": "Weather Radar",
  "question": "Magenta color radar returns indicate ____.",
  "answer": "Turbulence",
  "explanation": "Magenta is unique on the radar display \u2014 it specifically indicates turbulence detected by the radar (only available in WX+T mode within 40 NM). This is distinct from the precipitation colors (green, yellow, red) and represents areas where the radar has detected velocity variations in the precipitation that indicate turbulent air."
 },
 {
  "section": "Weather Radar",
  "question": "Predictive windshear warnings come from ______________.",
  "answer": "Weather radar",
  "explanation": "The weather radar does double duty \u2014 besides showing precipitation, it has a dedicated predictive windshear detection mode that looks for the characteristic Doppler signatures of microbursts and windshear events ahead of the airplane. This is distinct from the reactive windshear system, which detects windshear the airplane is already experiencing."
 },
 {
  "section": "Weather Radar",
  "question": "The more you reduce gain and the \u201cred\u201d color remains, the ______________.",
  "answer": "More dangerous the storm is",
  "explanation": "This is a practical radar interpretation technique. Reducing gain effectively filters out weaker returns. If you turn down the gain and the red still shows up, that cell is reflecting an enormous amount of energy \u2014 it's an extremely intense storm. This is a reliable way to identify the most dangerous cells that should be given the widest berth."
 },
 {
  "section": "Aircraft General",
  "question": "The minimum pavement width required for a 180 degree turn is _____ feet.",
  "answer": "79",
  "explanation": "The 737-800 needs at least 79 feet of pavement width to execute a 180-degree turn without the main gear leaving the paved surface. This is determined by the aircraft's wheelbase and turning geometry. Knowing this is important for taxi planning, especially at smaller airports with narrow taxiways or runways."
 },
 {
  "section": "Aircraft General",
  "question": "What are the thrust ratings of the CFM 56-7B26 engine?",
  "answer": "27K Bump 26K and 24K c. 22K d. All of the above.",
  "explanation": "The CFM 56-7B26 engine on the 737-800 has multiple available thrust ratings, with 27K being the bump (maximum available) rating, and derates at 26K, 24K, and 22K. Having multiple thrust ratings lets you use less thrust when the runway and conditions allow, which reduces engine wear and improves engine longevity."
 },
 {
  "section": "Aircraft General",
  "question": "The system that controls and monitors engine parameters is the _____.",
  "answer": "EEC",
  "explanation": "The Electronic Engine Control (EEC) is a dual-channel FADEC-type computer that manages all engine parameters. It controls fuel flow to maintain commanded thrust, provides N1/N2 overspeed protection, manages engine starts (including auto-abort for hot/wet starts), and adjusts idle speed based on conditions. It's the brain of the engine."
 },
 {
  "section": "Aircraft General",
  "question": "The B737-800 is limited to a maximum takeoff weight of _____ pounds.",
  "answer": "174,200",
  "explanation": "The 174,200 lb maximum takeoff weight is a structural limit of the 737-800 airframe \u2014 the airplane's structure is certified to handle this weight during the takeoff and climb phases. Actual takeoff weight may be limited further by runway length, obstacles, temperature, and other performance factors."
 },
 {
  "section": "Aircraft General",
  "question": "The B737-800 is limited to a maximum landing weight of _____ pounds.",
  "answer": "146,300",
  "explanation": "The 146,300 lb maximum landing weight is lower than MTOW because the landing gear and airframe must absorb the impact loads of landing. The difference between MTOW and MLW is normally accounted for by fuel burn during the flight. If you need to land above MLW (emergency), the airplane can handle it but requires a maintenance inspection."
 },
 {
  "section": "Aircraft General",
  "question": "What is the maximum operating altitude for the B737-800?",
  "answer": "41,000 ft.",
  "explanation": "The 41,000-foot ceiling is the certified maximum altitude for the 737-800, limited by pressurization capability (maintaining cabin altitude at or below 8,000 feet at maximum differential pressure), structural considerations, and engine performance at altitude."
 },
 {
  "section": "Aircraft General",
  "question": "What is the maximum zero fuel weight?",
  "answer": "138,300",
  "explanation": "The maximum zero fuel weight (138,300 lbs) limits how much structural load the wing root can carry without the relieving effect of fuel weight in the wings. Fuel in the wings actually reduces wing root bending stress, so the ZFW limit protects the wing structure when the tanks are empty."
 },
 {
  "section": "Aircraft General",
  "question": "(MAX) PSEU Light has been replaced with the ____ light:",
  "answer": "MAINT",
  "explanation": "On the MAX, the PSEU monitoring concept was replaced with a simpler MAINT (maintenance) light. The underlying monitoring functions are handled differently in the MAX's updated avionics architecture, but the crew-facing result is similar \u2014 the MAINT light indicates a maintenance action is needed but doesn't require immediate crew action."
 },
 {
  "section": "Adverse Environs",
  "question": "Takeoff with frost on the fuel tank underside of the wing surfaces is permitted provided the frost does not exceed ____ inch.",
  "answer": "1/8",
  "explanation": "Cold fuel in the wing tanks can cause frost to form on the lower wing surface. Up to 1/8 inch of this type of frost is permitted because it's thin, relatively smooth, and on the underside of the wing where aerodynamic impact is minimal. Anything thicker, or frost on the upper surface, would degrade aerodynamic performance and is not permitted."
 },
 {
  "section": "Adverse Environs",
  "question": "When encountering turbulence, maintain an airspeed of ____ knots or ____ Mach.",
  "answer": "280/.76",
  "explanation": "The turbulence penetration speed of 280 knots / .76 Mach is a compromise between two risks: too fast increases structural loads from gust encounters, while too slow brings you closer to stall in a sudden downdraft. This speed provides the best margin between stall speed and structural limit speed during turbulence."
 },
 {
  "section": "Adverse Environs",
  "question": "During flight in light to moderate turbulence, the autopilot and/or autothrottle may be ____ unless performance is objectionable.",
  "answer": "engaged",
  "explanation": "The autopilot and autothrottle can stay engaged in light to moderate turbulence because they react faster and more precisely than manual flying to maintain the desired attitude and speed. Only if the autopilot is making excessive corrections or performing poorly ('objectionable') should you consider disconnecting and flying manually."
 },
 {
  "section": "Adverse Environs",
  "question": "The maximum demonstrated crosswind component on a dry runway is ____ knots.",
  "answer": "33",
  "explanation": "The 33-knot crosswind component is the maximum that was demonstrated during flight testing on a dry runway. This is not a hard limitation but rather the highest crosswind Boeing tested \u2014 operating beyond it is at the captain's discretion based on conditions, but it represents the tested boundary of the airplane's crosswind handling capability."
 },
 {
  "section": "Adverse Environs",
  "question": "If heavy rain is encountered, ignition Start Switches should be positioned to ____.",
  "answer": "CONT",
  "explanation": "Heavy rain can cause engine flameout by disrupting combustion. Placing the ignition switches to CONT (continuous) provides constant ignition spark to immediately relight the engine if a flameout occurs, without any crew action needed. This is a precautionary measure during high water ingestion conditions."
 },
 {
  "section": "Adverse Environs",
  "question": "When weather conditions indicate windshear could be a threat. You should use ____ power for takeoff.",
  "answer": "26K max",
  "explanation": "When windshear is a threat, you use maximum available thrust (26K rating, no derates) to have the most energy and climb performance available. If you encounter a microburst during takeoff, maximum thrust gives you the best chance of climbing out of the windshear event. This is not the time to save engine life with reduced thrust."
 },
 {
  "section": "Performance",
  "question": "The TPS provides ____ for takeoff.",
  "answer": "a. thrust settings, flap settings, and MEL/CDL corrections b. V-speeds c. Airport Analysis data d. all of the above",
  "explanation": "The Takeoff Performance System (TPS) is a comprehensive performance tool that gives you everything needed for takeoff planning. It calculates V-speeds for your specific conditions, optimizes thrust and flap settings, accounts for MEL/CDL items that affect performance, and includes airport analysis data for obstacle clearance and runway limits."
 },
 {
  "section": "Performance",
  "question": "The TPS does account for ____.",
  "answer": "Runway slope",
  "explanation": "The TPS includes runway slope in its calculations because slope significantly affects takeoff performance. An uphill slope reduces acceleration and increases takeoff distance, while a downhill slope does the opposite. The TPS uses published runway slope data to provide accurate V-speeds and weight limits."
 },
 {
  "section": "Performance",
  "question": "Under the Thrust/V-speed section runway designators, up to a maximum of ____ runways may be shown on the TPS.",
  "answer": "5",
  "explanation": "The TPS can display performance data for up to 5 runways at a given airport, which covers most airport configurations. If an airport has more than 5 possible departure runways, the TPS will show the most operationally relevant ones. You select the appropriate runway to get your specific V-speeds and thrust settings."
 },
 {
  "section": "Performance",
  "question": "The tailwind correction under the Runway Limits column of the Airport Analysis is showing \"N/A.\" This means that ____.",
  "answer": "Takeoff with a tailwind is not authorized on that runway",
  "explanation": "When the Airport Analysis shows 'N/A' for tailwind correction, it means that particular runway cannot accommodate any tailwind component for takeoff. This is typically due to obstacle clearance or runway length limitations that leave no margin for tailwind degradation. You must use a different runway or wait for wind conditions to change."
 },
 {
  "section": "Performance",
  "question": "____ requires maximum takeoff thrust at the 26K rating.",
  "answer": "Using Improved Performance",
  "explanation": "Improved Performance is a procedure that trades maximum thrust for improved obstacle clearance or higher takeoff weight limits. By using the full 26K thrust rating (no derates or assumed temperature), you get the best possible climb gradient, which may allow operations from runways or at weights that wouldn't be possible with reduced thrust."
 },
 {
  "section": "Performance",
  "question": "If the temperature on the TPS is colder than ____ degrees C, the Airport Analysis section will show Engine Anti-ice corrections for the Climb and Runway limits.",
  "answer": "15",
  "explanation": "Below 15 degrees C, there's a possibility of encountering icing conditions (especially with visible moisture present). The Airport Analysis includes engine anti-ice corrections because running engine anti-ice reduces available takeoff thrust, which affects climb limit and runway limit weights. The TPS shows these corrections so you can plan accordingly."
 },
 {
  "section": "Performance",
  "question": "Authorized flap settings for takeoff are ____.",
  "answer": "1, 5, 15, 25",
  "explanation": "The 737-800 can take off with flaps 1, 5, 15, or 25. Lower flap settings (1, 5) give better climb performance but require higher speeds and more runway. Higher settings (15, 25) reduce takeoff speeds and runway required but reduce climb gradient. The TPS helps determine the optimal flap setting for your specific conditions."
 },
 {
  "section": "Performance",
  "question": "A runway should be considered contaminated when more than ____ % of the required field length within the width being used is covered by standing water, slush, or wet snow more than ____ inches deep.",
  "answer": "25, 1/8",
  "explanation": "The 25% coverage and 1/8 inch depth thresholds define when a runway transitions from 'wet' to 'contaminated,' which significantly affects performance calculations. Contaminated runways reduce braking effectiveness and increase stopping distances. Performance data for contaminated runways is more restrictive, potentially limiting your takeoff and landing weights."
 },
 {
  "section": "Performance",
  "question": "It is recommended to use Flaps ____ for takeoffs on contaminated runways to minimize the takeoff speed.",
  "answer": "15",
  "explanation": "Flaps 15 provides a good balance on contaminated runways: it gives you lower V-speeds (meaning less time on the contaminated surface accelerating) while still providing acceptable climb performance. Lower flap settings would require higher speeds on a slippery surface, and higher settings would reduce climb performance unnecessarily."
 },
 {
  "section": "Performance",
  "question": "The maximum takeoff weight is ____ lbs.",
  "answer": "174,200",
  "explanation": "The 174,200 lb structural maximum takeoff weight is the certified limit for the 737-800 airframe. Your actual takeoff weight will typically be lower due to runway length, obstacle clearance, climb requirements, and other operational limitations. But you can never exceed this number regardless of conditions."
 },
 {
  "section": "Performance",
  "question": "The maximum landing weight is ____ lbs.",
  "answer": "146,300",
  "explanation": "At 146,300 lbs, the maximum landing weight is 27,900 lbs less than MTOW. This difference is normally covered by fuel burn enroute. If you must land shortly after takeoff at a weight above MLW, it's permissible in an emergency but requires a maintenance inspection of the landing gear and airframe structure afterward."
 },
 {
  "section": "Performance",
  "question": "For a Flaps 15 landing, add 10 knots to VREF if ____.",
  "answer": "engine anti-ice will be used during landing wing anti-ice has been used anytime during flight icing conditions were encountered during flight and the landing temperature is colder than 10 degrees C Any of the above occur",
  "explanation": "The 10-knot additive to VREF for Flaps 15 in icing conditions provides a safety margin because ice contamination degrades wing performance and increases stall speed. Engine anti-ice bleeds thrust, wing anti-ice changes the wing's aerodynamic characteristics, and cold temperatures suggest possible residual ice. The extra speed keeps you safely above the potentially higher stall speed."
 }
];
