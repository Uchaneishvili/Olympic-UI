import styles from "./Columns.module.css";

export const SnowboardCol = [
	{
		key: "_id",
		title: "#",
		width: 100,
		textAlign: "center",
		render: (record, index) => {
			return (
				<div className={styles.rankingContainer}>
					<div className={styles.ranking}>
						<div className={styles.index}>{index + 1}.</div>
						<div className={styles.flag}>{record.flag}</div>
					</div>
				</div>
			);
		},
	},
	{
		key: "athlete",
		title: "Athlete",
		width: 800,
		textAlign: "start",
		render: (record) => {
			return (
				<>
					<div className={styles.nameContainer}>
						<div className={styles.country}>({record.country})</div>
						<div className={styles.name}>{record.name}</div>
					</div>
				</>
			);
		},
	},

	{
		key: "run1",
		title: "Run1",
		textAlign: "center",

		render: (record) => {
			return <>-</>;
		},
	},
	{
		key: "run2",
		title: "Run2",
		textAlign: "center",
		render: (record) => {
			return <>-</>;
		},
	},
	{
		key: "run3",
		title: "Run3",
		textAlign: "center",
		render: (record) => {
			return <>-</>;
		},
	},
	{
		key: "score",
		title: "Score",
		textAlign: "center",

		render: (record) => {
			return <>-</>;
		},
	},
];

export const BiathlonCol = [
	{
		key: "_id",
		title: "#",
		width: 100,
		textAlign: "center",
		render: (record) => {
			return (
				<div className={styles.rankingContainer}>
					<div className={styles.ranking}>
						<div className={styles.index}>{1}.</div>
						<div className={styles.flag}>{record.flag}</div>
					</div>
				</div>
			);
		},
	},
	{
		key: "description",
		title: "Description",
		width: 800,
		textAlign: "start",
		render: (record) => {
			return (
				<>
					<div className={styles.nameContainer}>
						<div className={styles.country}>({record.country})</div>
						<div className={styles.name}>{record.name}</div>
					</div>
				</>
			);
		},
	},

	{
		key: "shooting",
		title: "Shooting",
		textAlign: "center",

		render: (record) => {
			return <>-</>;
		},
	},
	{
		key: "time",
		title: "Time",
		textAlign: "center",

		render: (record) => {
			return <>-</>;
		},
	},
	{
		key: "difference",
		title: "Diff.",
		textAlign: "center",

		render: (record) => {
			return <>-</>;
		},
	},
];