import React from "react";
import { StyleSheet } from "react-native";

import { Input } from "galio-framework";

import Icon from "./Icon";
import { Theme } from "../constants";

function ArInput(props) {
	const shadowless = props.shadowless || false;
	const success = props.success || false;
	const error = props.error || false;

	const inputStyles = [
		styles.input,
		!shadowless && styles.shadow,
		success && styles.success,
		error && styles.error,
		{ ...props.style },
	];

	return (
		<Input
			placeholder="write something here"
			placeholderTextColor={Theme.COLORS.MUTED}
			style={inputStyles}
			color={Theme.COLORS.HEADER}
			iconContent={
				<Icon
					size={14}
					color={Theme.COLORS.ICON}
					name="link"
					family="AntDesign"
				/>
			}
			{...props}
		/>
	);
}

const styles = StyleSheet.create({
	input: {
		borderRadius: 4,
		borderColor: Theme.COLORS.BORDER,
		height: 44,
		backgroundColor: "#FFFFFF",
	},
	success: {
		borderColor: Theme.COLORS.INPUT_SUCCESS,
	},
	error: {
		borderColor: Theme.COLORS.INPUT_ERROR,
	},
	shadow: {
		shadowColor: Theme.COLORS.BLACK,
		shadowOffset: { width: 0, height: 1 },
		shadowRadius: 2,
		shadowOpacity: 0.05,
		elevation: 2,
	},
});

export default ArInput;
