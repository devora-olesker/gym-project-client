import { Bar } from "react-chartjs-2";

export default function Chart(props) {
    return (
        <Bar
            data={props.chartData}
            options={{
                plugins: {
                    title: {
                        display: true,
                        text: "כמות הזמן בדקות"
                    }
                }
            }}
        />
    );
}