#!/usr/bin/env python3

import rospy
import numpy as np
from geometry_msgs.msg import PoseStamped, Twist, Pose2D, Point
from rospy.numpy_msg import numpy_msg
from std_msgs.msg import Float32MultiArray


class pointpublisher:
    def __init__(self):
        rospy.init_node("point_publisher", anonymous=True)
        self.rate = rospy.Rate(3)
        # Subscriber for the hector pose and voronoi point pose

        self.pose = np.array([0.00, 0.00, 0.00])
        self.pose_orientation = np.array([0.00, 0.00, 0.00, 0.00])
        self.voronoi_target = np.array([0.0001, 0.0001, 0.0001])
        self.temp = np.array([0.00, 0.00, 0.00])

        self.pub = rospy.Publisher('/point_topic', numpy_msg(Float32MultiArray), queue_size=10)
        self.rate = rospy.Rate(10)  # 1 Hz
        self.pos_tollerance = 0.50

    def publish_points(self, point):

        point_msg = numpy_msg(Float32MultiArray)
        self.pub.publish(point_msg)
        print(point)

    # def check(self, i):
    #     if (
    #         (
    #             round(self.pose[0], 4) - self.voronoi_target[i][0] < self.pos_tollerance
    #             and round(self.pose[0], 4) - self.voronoi_target[i][0]
    #             > -self.pos_tollerance
    #         )
    #         and (
    #             round(self.pose[1], 4) - self.voronoi_target[i][1] < self.pos_tollerance
    #             and round(self.pose[1], 4) - self.voronoi_target[i][1]
    #             > -self.pos_tollerance
    #         )
    #         and (
    #             round(self.pose[1], 4) - self.voronoi_target[i][1] < self.pos_tollerance
    #             and round(self.pose[1], 4) - self.voronoi_target[i][1]
    #             > -self.pos_tollerance
    #         )
    #     ):
    #         return True
        
    # def pose_cb(self, pose_msg):
    #     self.pose = np.array(
    #         [
    #             pose_msg.pose.position.x,
    #             pose_msg.pose.position.y,
    #             pose_msg.pose.position.z,
    #         ]
    #     )   

    def run(self):
        while not rospy.is_shutdown():

            print("estoy aqui")
            path = np.array(
            [
                [1.00, 1.00, 1.00],
                [2.00, 2.00, 2.00]
            ]
        )   
            self.voronoi_target = path

            self.publish_points(self.voronoi_target)

            # while i <= len(path):
            #     if self.check(i) == True:
            #         i = i + 1
            #     self.publish_points(self.voronoi_target[i])
            #     self.rate.sleep()
            #     print("estoy aqui dos")




if __name__ == "__main__":

    point_pub = pointpublisher()
    point_pub.run()


