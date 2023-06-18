
type EsEchImgProps = {
    img: string
}
export default function EsEchImg({img}: EsEchImgProps) {
    return (
        <div className="Houses_EchOne">
            <img src={img} alt="" />
        </div>
    )
}