from app import db

class YourModel(db.Model):
    __tablename__ = 'model'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    query_date = db.Column(db.DateTime, nullable=False, default=db.func.current_timestamp())
    image1 = db.Column(db.String(255), nullable=False)
    image2 = db.Column(db.String(255), nullable=False)

    def __init__(self, image1, image2):
        self.image1 = image1
        self.image2 = image2

    def __repr__(self):
        return f'<YourModel id={self.id} query_date={self.query_date} image1={self.image1} image2={self.image2}>'

# Example usage:
# new_record = YourModel(image1='path/to/image1.jpg', image2='path/to/image2.jpg')
# db.session.add(new_record)
# db.session.commit()
